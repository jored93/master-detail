import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column
} from 'typeorm';

export abstract class Base extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id!: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;

  @Column({ name: 'creation_user', nullable: false })
    creationUser!: string;

  @Column({ name: 'update_user', nullable: true })
    updateUser!: string;
}
