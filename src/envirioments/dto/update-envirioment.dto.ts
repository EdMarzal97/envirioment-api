import { PartialType } from '@nestjs/mapped-types';
import { CreateEnviriomentDto } from './create-envirioment.dto';

export class UpdateEnviriomentDto extends PartialType(CreateEnviriomentDto) {}
