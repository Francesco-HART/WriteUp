import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './infrastructure/modules/socket.module';
import { UserModule } from './infrastructure/modules/user.module';
import { DatabaseModule } from './infrastructure/config/database.module';
import { AuthModule } from './infrastructure/modules/auth.module';
import { TagModule } from './infrastructure/modules/tag.module';
import { CategoryModule } from './infrastructure/modules/category.module';
import { WriteUpModule } from './infrastructure/modules/writeup.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { WRITEUP_MD_FOLDER } from './infrastructure/common/variables/variables';
import { MulterConfigModule } from './infrastructure/common/multer';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public/writeup/'),
    }),
    MulterConfigModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
    AuthModule,
    UserModule,
    TagModule,
    CategoryModule,
    WriteUpModule,
    SocketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
