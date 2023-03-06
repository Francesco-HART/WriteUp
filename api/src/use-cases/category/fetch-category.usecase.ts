import { Injectable } from '@nestjs/common';
import { ICategoryPort } from 'src/domain/ports/category.port';
import { Category } from 'src/domain/models/category';

@Injectable()
class FetchCategoryUseCase {
  constructor(private readonly CategoryPort: ICategoryPort) {}

  async execute(): Promise<Category[]> {
    return await this.CategoryPort.fetch();
  }
}

export { FetchCategoryUseCase };
