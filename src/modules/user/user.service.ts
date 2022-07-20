import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateUserResponse,
  UserInterface,
} from '../../core/interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}
  users: UserInterface[] = [];

  async getUsers(): Promise<UserInterface[]> {
    return await this.repository.find();
  }

  async getUser(id: number): Promise<UserInterface> {
    return await this.repository.findOneBy({ id });

    //findOne({ where: { id } });
  }

  /**
   * CreateUser method is of type CreateUserResponse and accepts a payload argument of type UserInterface
   * @params {payload}
   * @returns {CreateUserResponse}
   */
  createUser(payload: UserInterface): CreateUserResponse {
    this.users = [...this.users, payload];

    return { message: 'User created successfully', payload };
  }
}
