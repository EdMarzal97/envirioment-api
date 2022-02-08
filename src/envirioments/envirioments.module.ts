import { Module } from '@nestjs/common';
import { EnviriomentsService } from './envirioments.service';
import { EnviriomentsController } from './envirioments.controller';

@Module({
  controllers: [EnviriomentsController],
  providers: [EnviriomentsService]
})
export class EnviriomentsModule {}
