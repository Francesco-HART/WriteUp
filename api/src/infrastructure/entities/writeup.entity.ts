import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Image, WriteUpModel } from '../../domain/models/writeup';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from './category.entity';
import { Category } from 'src/domain/models/category';

class ImageEntity implements Image {
  @ApiProperty()
  @Prop({
    type: Buffer,
    required: true,
  })
  data: Buffer;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  contentType: string;
}

@Schema()
class WriteUpEntity implements WriteUpModel {
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @ApiProperty()
  @Prop({
    type: ImageEntity,
    required: true,
  })
  image: ImageEntity;

  @ApiProperty()
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  md_url: string;

  @ApiProperty()
  @Prop({ type: Types.ObjectId, ref: CategoryEntity.name, required: true })
  category: Category;

  @ApiProperty()
  @Prop({
    type: String,
    unique: true,
    required: true,
  })
  title: string;

  @ApiProperty()
  @Prop({
    type: Date,
    default: Date.now(),
    required: true,
  })
  created_at: Date;

  @ApiProperty()
  _id: Types.ObjectId;
}

type WriteUpDocument = WriteUpEntity & Document;

const WriteUpSchema = SchemaFactory.createForClass(WriteUpEntity);

export { WriteUpEntity, WriteUpDocument, WriteUpSchema, ImageEntity };
