import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../shared/services/base.service';
import { Post } from './post.entity';

@Injectable()
export class PostService extends BaseService<Post> {
  constructor(@InjectRepository(Post) private repository: Repository<Post>) {
    super(repository);
  }
}
