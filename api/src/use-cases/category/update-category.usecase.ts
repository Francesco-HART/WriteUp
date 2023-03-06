import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from 'src/domain/models/category';
import {
  ICategoryPort,
  IUpdateCategoryDTO,
} from 'src/domain/ports/category.port';
import { FetchOneCategoryUseCase } from './fetch-one-category.usecase';

@Injectable()
class UpdateCategoryUseCase {
  constructor(
    private readonly CategoryPort: ICategoryPort,
    private readonly fetchOneCategoryUseCase: FetchOneCategoryUseCase,
  ) {}

  async execute(id: string, dto: IUpdateCategoryDTO): Promise<Category> {
    if (await this.fetchOneCategoryUseCase.execute(id)) {
      return await this.CategoryPort.update(id, dto);
    }
    throw new NotFoundException();
  }
}

export { UpdateCategoryUseCase };
