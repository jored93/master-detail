import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Catalog } from './catalog.entity';
@Entity()
export class CatalogDetail extends Base {
  @Column({ length: 20, nullable: false })
    code!: string;

  @Column({ length: 100, nullable: false })
    name!: string;

  @Column({ nullable: true, length: 200 })
    description?: string;

  @ManyToOne(_type => Catalog, { nullable: false })
  @JoinColumn({ name: 'catalog_id', referencedColumnName: 'id' })
    catalog?: Catalog;

  @Column({ name: 'catalog_id' })
    catalogId!: string;

  @Column({ nullable: true, default: true })
    active?: boolean;
}
