import { Column, Entity, Index } from 'typeorm';
import { Base } from './base.entity';
@Entity()
export class Catalog extends Base {
  @Column({ length: 60 })
  @Index({ unique: true })
    name!: string;

  @Column({ nullable: true, length: 500 })
    description?: string;

  @Column({ nullable: true, default: 0 })
    level?: number;

  @Column({ nullable: true, default: true })
    status?: boolean;
}
