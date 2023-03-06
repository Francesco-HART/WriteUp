import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { TagModel } from 'src/domain/models/tag';
@Schema()
class TagEntity implements TagModel {
  @ApiProperty()
  _id: Types.ObjectId;
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;
}

type TagDocument = TagEntity & Document;

const TagSchema = SchemaFactory.createForClass(TagEntity);

export { TagEntity, TagDocument, TagSchema };
