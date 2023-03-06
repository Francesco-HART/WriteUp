import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class CreateTagDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}

export { CreateTagDto };
