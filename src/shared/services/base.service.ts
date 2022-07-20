import { Repository } from 'typeorm';
import { SharedBaseEntity } from '../entities/base.entity';

export class BaseService<T extends SharedBaseEntity> {
  constructor(private baseRepository: Repository<T>) {}

  async getAll(): Promise<T[]> {
    return await this.baseRepository.find({ relations: [] });
  }
  async getOne(id: number): Promise<T> {
    return await this.baseRepository.findOneBy({ id: id as any });
  }

  async create(payload: T): Promise<{ message: string; payload: T }> {
    await this.baseRepository.save(payload);
    return { message: 'Created successfully', payload };
  }
}
