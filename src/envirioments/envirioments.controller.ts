import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EnviriomentsService } from './envirioments.service';
import { CreateEnviriomentDto } from './dto/create-envirioment.dto';
import { UpdateEnviriomentDto } from './dto/update-envirioment.dto';

@Controller('envirioments')
export class EnviriomentsController {
  constructor(private readonly enviriomentsService: EnviriomentsService) {}

  @Post()
  create(@Body() createEnviriomentDto: CreateEnviriomentDto) {
    return this.enviriomentsService.create(createEnviriomentDto);
  }

  @Get()
  findAll() {
    return this.enviriomentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enviriomentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnviriomentDto: UpdateEnviriomentDto) {
    return this.enviriomentsService.update(+id, updateEnviriomentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enviriomentsService.remove(+id);
  }
}
