import { Injectable } from '@nestjs/common';
import { Category } from 'src/domain/models/category';
import {
  ICategoryPort,
  ICreateCategoryDto,
} from 'src/domain/ports/category.port';

@Injectable()
class CreateCategoryUseCase {
  constructor(private readonly CategoryPort: ICategoryPort) {}
  async execute(dto: ICreateCategoryDto): Promise<Category> {
    return await this.CategoryPort.create(dto);
  }
}

export { CreateCategoryUseCase };
