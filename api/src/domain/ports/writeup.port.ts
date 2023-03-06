import { Types } from 'mongoose';
import { Image, WriteUpModel } from '../models/writeup';

abstract class ICreateWriteUpDto {
  name: string;
  description: string;
  image: Image;
  md_url: string;
  category: Types.ObjectId;
  title: string;
  created_at?: Date;
}

abstract class IUpdateWriteUp {
  name?: string;
  description?: string;
  image?: Image;
  md_url?: string;
  category?: Types.ObjectId;
  title?: string;
}

abstract class IWriteUpPort {
  abstract create(dto: ICreateWriteUpDto): Promise<WriteUpModel>;
  abstract fetch(): Promise<WriteUpModel[]>;
  abstract fetchOne(id: string): Promise<WriteUpModel>;
  abstract update(plantId: string, dto: IUpdateWriteUp): Promise<WriteUpModel>;
  abstract delete(plantId: string): Promise<WriteUpModel>;
}

export { IWriteUpPort, ICreateWriteUpDto, IUpdateWriteUp };
