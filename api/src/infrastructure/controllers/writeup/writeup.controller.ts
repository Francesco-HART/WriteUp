import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
  Delete,
  Patch,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserTypesEnum } from 'src/domain/models/user';
import { CreateWriteUpUseCase } from 'src/use-cases/writeup/create-writeup.usecase';
import { DeleteWriteUpUseCase } from 'src/use-cases/writeup/delete-writeup.usecase';
import { FetchOneWriteUpUseCase } from 'src/use-cases/writeup/fetch-one-writeup.usecase';
import { FetchWriteUpUseCase } from 'src/use-cases/writeup/fetch-writeup.usecase';
import { UpdateWriteUpUseCase } from 'src/use-cases/writeup/update-writeup.usecase';
import { AccountTypesGuard } from '../auth/middlewares/admin.guard';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { AccountTypes } from '../auth/middlewares/decorators/accout.decorator';
import { diskStorage } from 'multer';

import { CreateWriteUpDto, UpdateWriteUpDto } from './writeup.dto';
import { WriteUpPresenter } from './writeup.presenter';
import { extname } from 'path';

const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  console.log('iciiiiiiiii', `${name}-${randomName}${fileExtName}`);
  return callback(null, `${name}-${randomName}${fileExtName}`);
};

@ApiTags('writeups')
@Controller('writeups')
//@UseGuards(JwtAuthGuard, AccountTypesGuard)
@ApiResponse({ status: 500, description: 'Internal error' })
export class WriteUpController {
  readonly writeupFolder = '/app/public/writeup/';

  constructor(
    private readonly createPlantUseCase: CreateWriteUpUseCase,
    private readonly fetchWriteUpUseCase: FetchWriteUpUseCase,
    private readonly fetchOneWriteUpUseCase: FetchOneWriteUpUseCase,
    private readonly updateWriteUpUseCase: UpdateWriteUpUseCase,
    private readonly deleteWriteUpUseCase: DeleteWriteUpUseCase,
  ) {}

  @Post()
  // @AccountTypes([UserTypesEnum.ADMIN])
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '/app/public/writeup',
        filename: editFileName,
      }),
    }),
  )
  async create(
    @UploadedFile() file,

    @Body() dto: CreateWriteUpDto,
  ): Promise<WriteUpPresenter> {
    console.log(file, 'iciiiiiiiiiiiiiiiiiiiiiiiiii');

    dto.md_url = file.path;

    const writeup = await this.createPlantUseCase.execute(dto);
    return new WriteUpPresenter(writeup);
  }

  @Get()
  async fetch(): Promise<WriteUpPresenter[]> {
    const writeups = await this.fetchWriteUpUseCase.execute();
    return writeups.map((writeup) => new WriteUpPresenter(writeup));
  }

  @Get(':id')
  async fetchOne(@Param('id') id: string): Promise<WriteUpPresenter> {
    const writeup = await this.fetchOneWriteUpUseCase.execute(id);
    return new WriteUpPresenter(writeup);
  }
  user;

  @AccountTypes([UserTypesEnum.ADMIN])
  @Patch(':id')
  async updatePlant(
    @Param('id') id,
    @Body() dto: UpdateWriteUpDto,
  ): Promise<WriteUpPresenter> {
    const writeup = await this.updateWriteUpUseCase.execute(id, dto);
    return new WriteUpPresenter(writeup);
  }

  @AccountTypes([UserTypesEnum.ADMIN])
  @Delete(':id')
  async deletePlant(@Param('id') id): Promise<WriteUpPresenter> {
    const writeup = await this.deleteWriteUpUseCase.execute(id);
    return new WriteUpPresenter(writeup);
  }
}
