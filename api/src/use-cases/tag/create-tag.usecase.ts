import { Injectable } from '@nestjs/common';
import { TagModel } from 'src/domain/models/tag';
import { ITagPort } from 'src/domain/ports/tag.port';

@Injectable()
class CreateTagUseCase {
  constructor(private readonly TagPort: ITagPort) {}
  async execute(name: string): Promise<TagModel> {
    return await this.TagPort.create(name);
  }
}

export { CreateTagUseCase };
