import { CatalogDetail } from '@entities/catalog-detail.entity';

export interface IEditCatalogDetailInput {
  id: string;
  catalogDetail: CatalogDetail;
}
