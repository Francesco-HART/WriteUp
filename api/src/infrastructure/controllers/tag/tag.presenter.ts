import { ApiProperty } from '@nestjs/swagger';
import { TagModel } from 'src/domain/models/tag';

class TagPresenter {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  constructor(tag: TagModel) {
    this.id = tag._id.toString();
    this.name = tag.name;
  }
}

export { TagPresenter };
