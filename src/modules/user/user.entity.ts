import { Column, Entity, OneToMany } from 'typeorm';
import { SharedBaseEntity } from '../../shared/entities/base.entity';
import { Post } from '../post/post.entity';

@Entity('users')
export class User extends SharedBaseEntity {
  @Column({ unique: true })
  username: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => Post, (post) => post.createdBy)
  posts: Post[];
}
