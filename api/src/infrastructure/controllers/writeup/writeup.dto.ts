import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';
import { Image } from 'src/domain/models/writeup';
import {
  ICreateWriteUpDto,
  IUpdateWriteUp,
} from 'src/domain/ports/writeup.port';

abstract class ImageDto implements Image {
  @ApiProperty()
  @IsNotEmpty()
  data: Buffer;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  contentType: string;
}

class UpdateWriteUpDto implements IUpdateWriteUp {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @Type(() => ImageDto)
  @IsOptional()
  image: ImageDto;

  @ApiProperty()
  @IsString()
  @IsOptional()
  md_url: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  category: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title: string;
}

abstract class CreateWriteUpDto implements ICreateWriteUpDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsObject()
  @Type(() => ImageDto)
  @IsNotEmpty()
  image: ImageDto;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  md_url: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: Types.ObjectId;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  created_at: Date;
}

export { UpdateWriteUpDto, CreateWriteUpDto };
export type { ImageDto };
