import { Catalog } from '@entities/catalog.entity';

export interface IEditCatalogInput {
  id: string;
  catalog: Catalog;
}
