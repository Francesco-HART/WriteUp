import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserTypesEnum } from 'src/domain/models/user';
import { CreateCategoryUseCase } from 'src/use-cases/category/create-category.usecase';
import { DeleteCategoryUseCase } from 'src/use-cases/category/delete-category.usecase';
import { FetchCategoryUseCase } from 'src/use-cases/category/fetch-category.usecase';
import { FetchOneCategoryUseCase } from 'src/use-cases/category/fetch-one-category.usecase';
import { UpdateCategoryUseCase } from 'src/use-cases/category/update-category.usecase';
import { AccountTypesGuard } from '../auth/middlewares/admin.guard';
import { JwtAuthGuard } from '../auth/middlewares/auth.guard';
import { AccountTypes } from '../auth/middlewares/decorators/accout.decorator';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';
import { CategoryPresenter } from './category.presenter';

@ApiTags('category')
@Controller('category')
@UseGuards(JwtAuthGuard, AccountTypesGuard)
@ApiResponse({ status: 500, description: 'Internal error' })
export class CategoryController {
  constructor(
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly fetchCategoryUseCase: FetchCategoryUseCase,
    private readonly fetchOneCategoryUseCase: FetchOneCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Post()
  @AccountTypes([UserTypesEnum.ADMIN])
  async create(@Body() dto: CreateCategoryDto): Promise<CategoryPresenter> {
    const Category = await this.createCategoryUseCase.execute(dto);
    return new CategoryPresenter(Category);
  }

  @Get()
  async fetch(): Promise<CategoryPresenter[]> {
    const Categorys = await this.fetchCategoryUseCase.execute();
    return Categorys.map((Category) => new CategoryPresenter(Category));
  }

  @Patch(':id')
  @AccountTypes([UserTypesEnum.ADMIN])
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
  ): Promise<CategoryPresenter> {
    const Category = await this.updateCategoryUseCase.execute(id, dto);
    return new CategoryPresenter(Category);
  }

  @Delete(':id')
  @AccountTypes([UserTypesEnum.ADMIN])
  async delete(@Param('id') id: string): Promise<CategoryPresenter> {
    const Category = await this.deleteCategoryUseCase.execute(id);
    return new CategoryPresenter(Category);
  }

  @Get(':id')
  async fetchOne(@Param('id') id: string): Promise<CategoryPresenter> {
    const category = await this.fetchOneCategoryUseCase.execute(id);
    return new CategoryPresenter(category);
  }
}
