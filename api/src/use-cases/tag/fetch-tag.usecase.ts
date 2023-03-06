import { Injectable } from '@nestjs/common';
import { TagModel } from 'src/domain/models/tag';
import { ITagPort } from 'src/domain/ports/tag.port';

@Injectable()
class FetchTagUseCase {
  constructor(private readonly TagPort: ITagPort) {}

  async execute(): Promise<TagModel[]> {
    return await this.TagPort.fetch();
  }
}

export { FetchTagUseCase };
