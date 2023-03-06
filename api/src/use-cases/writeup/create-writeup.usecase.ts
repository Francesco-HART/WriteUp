import { Injectable } from '@nestjs/common';
import { WriteUpModel } from 'src/domain/models/writeup';
import { ICreateWriteUpDto, IWriteUpPort } from 'src/domain/ports/writeup.port';

@Injectable()
class CreateWriteUpUseCase {
  constructor(private readonly writeUpPort: IWriteUpPort) {}
  async execute(dto: ICreateWriteUpDto): Promise<WriteUpModel> {
    return await this.writeUpPort.create(dto);
  }
}

export { CreateWriteUpUseCase };
