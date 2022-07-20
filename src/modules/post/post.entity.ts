import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { SharedBaseEntity } from '../../shared/entities/base.entity';
import { User } from '../user/user.entity';

@Entity()
export class Post extends SharedBaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.posts, { eager: false })
  @JoinColumn({ name: 'userid' })
  createdBy: User;
}
