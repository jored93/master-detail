import { Column, Entity, Index } from 'typeorm';
import { Base } from './base.entity';
@Entity()
export class Catalog extends Base {
  @Column({ length: 60 })
  @Index({ unique: true })
    name!: string;

  @Column({ length: 20, nullable: false })
    code!: string;

  @Column({ nullable: true, length: 500 })
    description?: string;

  @Column({ nullable: true, default: true })
    active?: boolean;
}
