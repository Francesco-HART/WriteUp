import { Types } from 'mongoose';
import { Category } from 'src/domain/models/category';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
class CategoryEntity implements Category {
  @ApiProperty()
  _id: Types.ObjectId;

  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  @ApiProperty()
  name: string;

  @Prop({
    type: String,
    required: true,
  })
  @ApiProperty()
  description: string;
}

type CategoryDocument = CategoryEntity & Document;

const CategorySchema = SchemaFactory.createForClass(CategoryEntity);

export { CategoryEntity, CategoryDocument, CategorySchema };
