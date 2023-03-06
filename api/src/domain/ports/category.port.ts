import { Category } from '../models/category';

abstract class ICreateCategoryDto {
  name: string;
  description: string;
}

abstract class IUpdateCategoryDTO {
  name?: string;
  description?: string;
}

abstract class ICategoryPort {
  abstract create(createUserDTO: ICreateCategoryDto): Promise<Category>;
  abstract fetch(): Promise<Category[]>;
  abstract fetchOne(id: string): Promise<Category>;
  abstract update(id: string, dto: IUpdateCategoryDTO): Promise<Category>;
  abstract delete(id: string): Promise<Category>;

  //abstract fetchAllAssociatedBySensor(): Promise<UserModel>;
}
export { ICategoryPort, ICreateCategoryDto, IUpdateCategoryDTO };
