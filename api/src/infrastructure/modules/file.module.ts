import { Module } from '@nestjs/common';
import { IFilePort } from 'src/domain/ports/file';
import { FileAdapter } from '../adapters/file.adapter';

@Module({
  providers: [{ provide: IFilePort, useClass: FileAdapter }],
})
export class FileModule {}
