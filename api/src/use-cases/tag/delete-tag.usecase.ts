import { Injectable, NotFoundException } from '@nestjs/common';
import { TagModel } from 'src/domain/models/tag';
import { ITagPort } from 'src/domain/ports/tag.port';
import { FetchOneTagUseCase } from './fetch-one-tag.usecase';

@Injectable()
class DeleteTagUseCase {
  constructor(
    private readonly TagPort: ITagPort,
    private readonly fetchOneTagUseCase: FetchOneTagUseCase,
  ) {}

  async execute(name: string): Promise<TagModel> {
    if (await this.fetchOneTagUseCase.execute(name)) {
      return await this.TagPort.delete(name);
    }
    throw new NotFoundException();
  }
}

export { DeleteTagUseCase };
