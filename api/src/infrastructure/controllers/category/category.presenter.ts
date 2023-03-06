import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/domain/models/category';

class CategoryPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  constructor(category: Category) {
    this.id = category._id.toString();
    this.name = category.name;
    this.description = category.description;
  }
}

export { CategoryPresenter };
