import { Injectable } from '@nestjs/common';
import { IWriteUpPort } from '../../domain/ports/writeup.port';
import { WriteUpModel } from '../../domain/models/writeup';

@Injectable()
class FetchOneWriteUpUseCase {
  constructor(private readonly writeUpPort: IWriteUpPort) {}

  async execute(id: string): Promise<WriteUpModel> {
    return await this.writeUpPort.fetchOne(id);
  }
}

export { FetchOneWriteUpUseCase };
