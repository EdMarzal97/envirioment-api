import { Injectable } from '@nestjs/common';
import { CreateEnviriomentDto } from './dto/create-envirioment.dto';
import { UpdateEnviriomentDto } from './dto/update-envirioment.dto';

@Injectable()
export class EnviriomentsService {
  create(createEnviriomentDto: CreateEnviriomentDto) {
    return 'This action adds a new envirioment';
  }

  findAll() {
    return `This action returns all envirioments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} envirioment`;
  }

  update(id: number, updateEnviriomentDto: UpdateEnviriomentDto) {
    return `This action updates a #${id} envirioment`;
  }

  remove(id: number) {
    return `This action removes a #${id} envirioment`;
  }
}
