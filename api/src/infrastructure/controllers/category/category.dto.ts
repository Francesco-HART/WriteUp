import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ICreateCategoryDto } from 'src/domain/ports/category.port';

class UpdateCategoryDto implements UpdateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

abstract class CreateCategoryDto implements ICreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}

export { UpdateCategoryDto, CreateCategoryDto };
