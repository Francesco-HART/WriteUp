import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

const mdFileFilter = (req, file, callback) => {
  console.log('laaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  if (!file.originalname.match(/\.(md)$/)) {
    return callback(new Error('Only md files are allowed!'), false);
  }
  return callback(null, true);
};

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        fileFilter: mdFileFilter,
        limits: {
          fileSize: config.get('FILE_SIZE_LIMIT'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MulterConfigModule {}
