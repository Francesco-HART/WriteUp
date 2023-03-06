import { Types } from 'mongoose';
import { Category } from './category';

interface WriteUpModel {
  _id: Types.ObjectId;
  name: string;
  description: string;
  image: Image;
  md_url: string;
  category: Category;
  title: string;
  created_at: Date;
}

class Image {
  data: Buffer;
  contentType: string;
}

export { WriteUpModel, Image };
