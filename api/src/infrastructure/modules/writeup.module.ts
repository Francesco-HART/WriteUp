import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IWriteUpPort } from 'src/domain/ports/writeup.port';
import { CreateWriteUpUseCase } from 'src/use-cases/writeup/create-writeup.usecase';
import { DeleteWriteUpUseCase } from 'src/use-cases/writeup/delete-writeup.usecase';
import { FetchOneWriteUpUseCase } from 'src/use-cases/writeup/fetch-one-writeup.usecase';
import { FetchWriteUpUseCase } from 'src/use-cases/writeup/fetch-writeup.usecase';
import { UpdateWriteUpUseCase } from 'src/use-cases/writeup/update-writeup.usecase';
import { WriteUpAdapter } from '../adapters/writeup.adapter';
import { WriteUpController } from '../controllers/writeup/writeup.controller';
import { WriteUpEntity, WriteUpSchema } from '../entities/writeup.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WriteUpEntity.name, schema: WriteUpSchema },
    ]),
  ],
  controllers: [WriteUpController],
  providers: [
    CreateWriteUpUseCase,
    UpdateWriteUpUseCase,
    DeleteWriteUpUseCase,
    FetchWriteUpUseCase,
    FetchOneWriteUpUseCase,
    { provide: IWriteUpPort, useClass: WriteUpAdapter },
  ],
})
export class WriteUpModule {}
