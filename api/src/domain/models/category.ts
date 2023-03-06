import { Types } from 'mongoose';

interface Category {
  _id: Types.ObjectId;
  name: string;
  description: string;
}

export { Category };
