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
  getUsers(): UserInterface[] {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUser(@Param() params: { id: number }, @Res() res): UserInterface {
    const user = this.userService.getUser(params.id);
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
