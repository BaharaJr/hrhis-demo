import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserInterface } from '../../core/interfaces/user.interface';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserInterface[]> {
    const users = await this.userService.getUsers();
    console.log(users);
    return users;
  }
  @Get(':id')
  async getUser(
    @Param() params: { id: number },
    @Res() res,
  ): Promise<UserInterface> {
    const user = await this.userService.getUser(params.id);
    if (user) {
      return res.status(HttpStatus.OK).send(user);
    }
    return res
      .status(HttpStatus.NOT_FOUND)
      .send({ error: `User with id ${params.id} could not be found` });
  }

  @Post()
  createUser(@Body() payload: UserInterface) {
    return this.userService.createUser(payload);
  }
}
