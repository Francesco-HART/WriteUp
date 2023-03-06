import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ITagPort } from 'src/domain/ports/tag.port';
import { CreateTagUseCase } from 'src/use-cases/tag/create-tag.usecase';
import { DeleteTagUseCase } from 'src/use-cases/tag/delete-tag.usecase';
import { FetchOneTagUseCase } from 'src/use-cases/tag/fetch-one-tag.usecase';
import { FetchTagUseCase } from 'src/use-cases/tag/fetch-tag.usecase';
import { TagAdapter } from '../adapters/tag.adapter';
import { TagController } from '../controllers/tag/tag.controller';
import { TagEntity, TagSchema } from '../entities/tag.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TagEntity.name, schema: TagSchema }]),
  ],

  controllers: [TagController],
  providers: [
    CreateTagUseCase,
    DeleteTagUseCase,
    FetchOneTagUseCase,
    FetchTagUseCase,
    { provide: ITagPort, useClass: TagAdapter },
  ],
})
export class TagModule {}
