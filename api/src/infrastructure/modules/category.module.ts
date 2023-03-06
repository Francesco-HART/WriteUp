import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ICategoryPort } from 'src/domain/ports/category.port';
import { CreateCategoryUseCase } from 'src/use-cases/category/create-category.usecase';
import { DeleteCategoryUseCase } from 'src/use-cases/category/delete-category.usecase';
import { FetchCategoryUseCase } from 'src/use-cases/category/fetch-category.usecase';
import { FetchOneCategoryUseCase } from 'src/use-cases/category/fetch-one-category.usecase';
import { UpdateCategoryUseCase } from 'src/use-cases/category/update-category.usecase';
import { CategoryAdapter } from '../adapters/category.adapter';
import { CategoryController } from '../controllers/category/category.controller';
import { CategoryEntity, CategorySchema } from '../entities/category.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CategoryEntity.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    FetchCategoryUseCase,
    FetchOneCategoryUseCase,
    { provide: ICategoryPort, useClass: CategoryAdapter },
  ],
})
export class CategoryModule {}
