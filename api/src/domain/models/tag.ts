import { Type } from 'class-transformer';
import { Types } from 'mongoose';

interface TagModel {
  _id: Types.ObjectId;
  name: string;
}

export { TagModel };
