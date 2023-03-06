import { Injectable } from '@nestjs/common';
import { IWriteUpPort } from '../../domain/ports/writeup.port';
import { WriteUpModel } from '../../domain/models/writeup';

@Injectable()
class FetchWriteUpUseCase {
  constructor(private readonly writeUpPort: IWriteUpPort) {}

  async execute(): Promise<WriteUpModel[]> {
    return await this.writeUpPort.fetch();
  }
}

export { FetchWriteUpUseCase };
