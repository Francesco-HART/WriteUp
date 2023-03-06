import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/domain/models/category';
import { ICategoryPort } from 'src/domain/ports/category.port';
import { FetchOneCategoryUseCase } from './fetch-one-category.usecase';

@Injectable()
class DeleteCategoryUseCase {
  constructor(
    private readonly CategoryPort: ICategoryPort,
    private readonly fetchOneCategoryUseCase: FetchOneCategoryUseCase,
  ) {}

  async execute(CategoryId: string): Promise<Category> {
    if (await this.fetchOneCategoryUseCase.execute(CategoryId)) {
      return await this.CategoryPort.delete(CategoryId);
    }
    throw new NotFoundException();
  }
}

export { DeleteCategoryUseCase };
