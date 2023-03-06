import { Injectable, NotFoundException } from '@nestjs/common';
import { WriteUpModel } from 'src/domain/models/writeup';
import { IWriteUpPort } from 'src/domain/ports/writeup.port';
import { FetchOneWriteUpUseCase } from './fetch-one-writeup.usecase';

@Injectable()
class DeleteWriteUpUseCase {
  constructor(
    private readonly WriteUpPort: IWriteUpPort,
    private readonly fetchOneWriteUpUseCase: FetchOneWriteUpUseCase,
  ) {}

  async execute(WriteUpId: string): Promise<WriteUpModel> {
    if (await this.fetchOneWriteUpUseCase.execute(WriteUpId)) {
      return await this.WriteUpPort.delete(WriteUpId);
    }
    throw new NotFoundException();
  }
}

export { DeleteWriteUpUseCase };
