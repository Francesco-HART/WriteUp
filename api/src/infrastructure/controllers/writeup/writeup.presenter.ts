import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/domain/models/category';
import { Image, WriteUpModel } from '../../../domain/models/writeup';
import { ImageDto } from './writeup.dto';

class WriteUpPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: Image;

  @ApiProperty()
  md_url: string;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  title: string;

  @ApiProperty()
  created_at: Date;
  constructor(writeUp: WriteUpModel) {
    this.id = writeUp._id.toString();
    this.name = writeUp.name;
    this.description = writeUp.description;
    this.image = writeUp.image;
    this.md_url = writeUp.md_url;
    this.category = writeUp.category;
    this.title = writeUp.title;
  }
}

export { WriteUpPresenter };
