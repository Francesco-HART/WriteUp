import { Injectable, NotFoundException } from '@nestjs/common';
import { WriteUpModel } from 'src/domain/models/writeup';
import { IUpdateWriteUp, IWriteUpPort } from 'src/domain/ports/writeup.port';
import { FetchOneWriteUpUseCase } from './fetch-one-writeup.usecase';

@Injectable()
class UpdateWriteUpUseCase {
  constructor(
    private readonly WriteUpPort: IWriteUpPort,
    private readonly fetchOneWriteUpUseCase: FetchOneWriteUpUseCase,
  ) {}

  async execute(writeUpId: string, dto: IUpdateWriteUp): Promise<WriteUpModel> {
    if (await this.fetchOneWriteUpUseCase.execute(writeUpId)) {
      return await this.WriteUpPort.update(writeUpId, dto);
    }
    throw new NotFoundException();
  }
}

export { UpdateWriteUpUseCase };
