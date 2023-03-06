abstract class IFilePort {
  abstract read(path: string, filre: File): Promise<File>;

  abstract write(path: string, filre: File): Promise<File>;

  abstract update(path: string, filre: File): Promise<File>;

  abstract remove(path: string): Promise<File>;

  abstract getPath(path: string): Promise<string>;
}

export { IFilePort };
