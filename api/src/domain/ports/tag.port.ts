import { TagModel } from '../models/tag';

abstract class ITagPort {
  abstract create(name: string): Promise<TagModel>;
  abstract delete(name: string): Promise<TagModel>;
  abstract fetch(): Promise<TagModel[]>;
  abstract fetchOne(name: string): Promise<TagModel>;
}
export { ITagPort };
