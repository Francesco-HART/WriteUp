import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TagModel } from 'src/domain/models/tag';
import { ITagPort } from 'src/domain/ports/tag.port';
import { TagDocument, TagEntity } from '../entities/tag.entity';
import { MongoError } from 'mongodb';

class TagAdapter implements ITagPort {
  constructor(
    @InjectModel(TagEntity.name)
    private tagEntity: Model<TagDocument>,
  ) {}

  async create(name: string): Promise<TagModel> {
    try {
      const tag = await new this.tagEntity({ name: name }).save();
      return tag;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async delete(name: string): Promise<TagModel> {
    try {
      const tagDeleted = await this.tagEntity.findOneAndDelete({
        name: name,
      });
      return tagDeleted;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetch(): Promise<TagModel[]> {
    try {
      const tag = await this.tagEntity.find().lean();
      return tag;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async fetchOne(name: string): Promise<TagModel> {
    try {
      const tag = await this.tagEntity.findOne({ name: name });
      return tag;
    } catch (error) {
      throw new MongoError(error);
    }
  }
}

export { TagAdapter };
