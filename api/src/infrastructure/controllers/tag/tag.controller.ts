import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { UserTypesEnum } from 'src/domain/models/user';
import { CreateTagUseCase } from 'src/use-cases/tag/create-tag.usecase';
import { DeleteTagUseCase } from 'src/use-cases/tag/delete-tag.usecase';
import { FetchOneTagUseCase } from 'src/use-cases/tag/fetch-one-tag.usecase';
import { FetchTagUseCase } from 'src/use-cases/tag/fetch-tag.usecase';
import { AccountTypesGuard } from '../auth/middlewares/admin.guard';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { AccountTypes } from '../auth/middlewares/decorators/accout.decorator';
import { CreateTagDto } from './tag.dto';
import { TagPresenter } from './tag.presenter';

@ApiTags('tags')
@Controller('tags')
@UseGuards(JwtAuthGuard, AccountTypesGuard)
@ApiResponse({ status: 500, description: 'Internal error' })
export class TagController {
  constructor(
    private readonly createTagUseCase: CreateTagUseCase,
    private readonly fetchTagUseCase: FetchTagUseCase,
    private readonly fetchOneTagUseCase: FetchOneTagUseCase,
    private readonly deleteTagUseCase: DeleteTagUseCase,
  ) {}

  @Post()
  @AccountTypes([UserTypesEnum.ADMIN])
  async create(@Body() dto: CreateTagDto): Promise<TagPresenter> {
    const tag = await this.createTagUseCase.execute(dto.name);
    return new TagPresenter(tag);
  }

  @Get()
  async fetch(): Promise<TagPresenter[]> {
    const Tags = await this.fetchTagUseCase.execute();
    return Tags.map((tag) => new TagPresenter(tag));
  }

  @Get(':name')
  async fetchOne(@Param('name') name: string): Promise<TagPresenter> {
    const tag = await this.fetchOneTagUseCase.execute(name);
    return new TagPresenter(tag);
  }

  @Delete(':name')
  @AccountTypes([UserTypesEnum.ADMIN])
  async delete(@Param('name') name): Promise<TagPresenter> {
    const tag = await this.deleteTagUseCase.execute(name);
    return new TagPresenter(tag);
  }
}
