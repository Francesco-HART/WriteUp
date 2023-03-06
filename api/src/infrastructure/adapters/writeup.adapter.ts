import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WriteUpModel } from 'src/domain/models/writeup';
import { IUpdateWriteUp, IWriteUpPort } from 'src/domain/ports/writeup.port';
import { WriteUpEntity, WriteUpDocument } from '../entities/writeup.entity';
import { MongoError } from 'mongodb';
import { CreateWriteUpDto } from '../controllers/writeup/writeup.dto';

export class WriteUpAdapter implements IWriteUpPort {
  constructor(
    @InjectModel(WriteUpEntity.name)
    private readonly WriteUpEntity: Model<WriteUpDocument>,
  ) {}

  async update(WriteUpId: string, dto: IUpdateWriteUp): Promise<WriteUpModel> {
    try {
      // TODO update md

      return await this.WriteUpEntity.findOneAndUpdate(
        { _id: WriteUpId },
        dto,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new MongoError(error);
    }
  }
  async delete(WriteUpId: string): Promise<WriteUpModel> {
    try {
      // TODO delete md
      const deletedWriteUp = await this.WriteUpEntity.findOneAndDelete({
        _id: WriteUpId,
      });
      return deletedWriteUp;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetch(): Promise<WriteUpModel[]> {
    try {
      return await this.WriteUpEntity.find();
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetchOne(id: string): Promise<WriteUpModel> {
    try {
      // TODO update md

      return await this.WriteUpEntity.findById(id);
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async create(createWriteUpDto: CreateWriteUpDto): Promise<WriteUpEntity> {
    try {
      // TODO update md

      return await new this.WriteUpEntity(createWriteUpDto).save();
    } catch (error) {
      throw new MongoError(error);
    }
  }
}
