import { Test, TestingModule } from '@nestjs/testing';
import { EnviriomentsService } from './envirioments.service';

describe('EnviriomentsService', () => {
  let service: EnviriomentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnviriomentsService],
    }).compile();

    service = module.get<EnviriomentsService>(EnviriomentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
