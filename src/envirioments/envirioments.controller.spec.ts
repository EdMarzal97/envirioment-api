import { Test, TestingModule } from '@nestjs/testing';
import { EnviriomentsController } from './envirioments.controller';
import { EnviriomentsService } from './envirioments.service';

describe('EnviriomentsController', () => {
  let controller: EnviriomentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnviriomentsController],
      providers: [EnviriomentsService],
    }).compile();

    controller = module.get<EnviriomentsController>(EnviriomentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
