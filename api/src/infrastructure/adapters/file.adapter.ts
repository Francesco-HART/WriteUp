import { IFilePort } from 'src/domain/ports/file';

class FileAdapter implements IFilePort {
  read(path: string, filre: File): Promise<File> {
    throw new Error('Method not implemented.');
  }
  write(path: string, filre: File): Promise<File> {
    throw new Error('Method not implemented.');
  }
  update(path: string, filre: File): Promise<File> {
    throw new Error('Method not implemented.');
  }
  remove(path: string): Promise<File> {
    throw new Error('Method not implemented.');
  }
  getPath(path: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}

export { FileAdapter };
