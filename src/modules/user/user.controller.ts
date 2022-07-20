import { Controller } from '@nestjs/common';
import { BaseController } from '../../shared/controllers/base.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController extends BaseController<User> {
  constructor(private userService: UserService) {
    super(userService);
  }
}
