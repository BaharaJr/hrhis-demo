import { Injectable } from '@nestjs/common';
import {
  CreateUserResponse,
  UserInterface,
} from '../../core/interfaces/user.interface';

@Injectable()
export class UserService {
  users: UserInterface[] = [];

  getUsers(): UserInterface[] {
    return this.users;
  }

  getUser(id: number): UserInterface {
    return this.users.find((user) => Number(user.id) === Number(id));
  }

  /*
   * CreateUser method is of type CreateUserResponse and accepts a payload argument of type UserInterface
   * @payload {payload}
   * @returns {CreateUserResponse}
   */
  createUser(payload: UserInterface): CreateUserResponse {
    this.users = [...this.users, payload];

    return { message: 'User created successfully', payload };
  }
}
