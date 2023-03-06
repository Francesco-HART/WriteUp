import { Category } from 'src/domain/models/category';
import {
  ICategoryPort,
  ICreateCategoryDto,
  IUpdateCategoryDTO,
} from 'src/domain/ports/category.port';
import { MongoError } from 'mongodb';
import { CategoryDocument, CategoryEntity } from '../entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

class CategoryAdapter implements ICategoryPort {
  constructor(
    @InjectModel(CategoryEntity.name)
    private categoryEntity: Model<CategoryDocument>,
  ) {}

  async create(dto: ICreateCategoryDto): Promise<Category> {
    try {
      const category = await new this.categoryEntity(dto).save();
      return category;
    } catch (error) {
      throw new MongoError(error);
    }
  }
  async fetch(): Promise<Category[]> {
    try {
      const category = await this.categoryEntity.find().lean();
      return category;
    } catch (error) {
      throw new MongoError(error);
    }
  }
  async fetchOne(id: string): Promise<Category> {
    try {
      const category = await this.categoryEntity.findOne({ _id: id });
      return category;
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async update(id: string, dto: IUpdateCategoryDTO): Promise<Category> {
    try {
      return await this.categoryEntity.findOneAndUpdate({ _id: id }, dto, {
        new: true,
      });
    } catch (error) {
      throw new MongoError(error);
    }
  }

  async delete(id: string): Promise<Category> {
    try {
      const categoryDeleted = await this.categoryEntity.findOneAndDelete({
        _id: id,
      });
      return categoryDeleted;
    } catch (error) {
      throw new MongoError(error);
    }
  }
}

export { CategoryAdapter };
