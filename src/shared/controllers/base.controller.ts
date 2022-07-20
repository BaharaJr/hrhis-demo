import { Body, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { SharedBaseEntity } from '../entities/base.entity';
import { BaseService } from '../services/base.service';

export class BaseController<T extends SharedBaseEntity> {
  constructor(private baseService: BaseService<T>) {}
  @Get()
  async getAll(): Promise<T[]> {
    return await this.baseService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params: { id: number }, @Res() res): Promise<T> {
    const entity = await this.baseService.getOne(params.id);
    if (entity) {
      return res.status(HttpStatus.OK).send(entity);
    }
    return res
      .status(HttpStatus.NOT_FOUND)
      .send({ error: `Object with id ${params.id} could not be found` });
  }

  @Post()
  async create(@Body() payload: T): Promise<{ message: string; payload: T }> {
    return await this.baseService.create(payload);
  }
}
