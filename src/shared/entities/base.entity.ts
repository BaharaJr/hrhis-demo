import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

export class SharedBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  lastUpdated: Date;

  @Column({ nullable: true })
  code: string;
}
