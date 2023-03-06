import { Injectable } from '@nestjs/common';
import { Category } from 'src/domain/models/category';
import { ICategoryPort } from 'src/domain/ports/category.port';

@Injectable()
class FetchOneCategoryUseCase {
  constructor(private readonly CategoryPort: ICategoryPort) {}

  async execute(id: string): Promise<Category> {
    return await this.CategoryPort.fetchOne(id);
  }
}

export { FetchOneCategoryUseCase };
