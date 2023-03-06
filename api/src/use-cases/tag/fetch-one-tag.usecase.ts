import { Injectable } from '@nestjs/common';
import { TagModel } from 'src/domain/models/tag';
import { ITagPort } from 'src/domain/ports/tag.port';

@Injectable()
class FetchOneTagUseCase {
  constructor(private readonly tagPort: ITagPort) {}

  async execute(name: string): Promise<TagModel> {
    return await this.tagPort.fetchOne(name);
  }
}

export { FetchOneTagUseCase };
