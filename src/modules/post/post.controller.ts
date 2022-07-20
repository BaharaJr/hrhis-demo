import { Controller } from '@nestjs/common';
import { BaseController } from '../../shared/controllers/base.controller';
import { Post } from './post.entity';
import { PostService } from './post.service';

@Controller('api/posts')
export class PostController extends BaseController<Post> {
  constructor(private postService: PostService) {
    super(postService);
  }
}
