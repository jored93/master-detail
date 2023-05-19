import { faker } from '@faker-js/faker';
import { define, factory } from 'typeorm-seeding';
import { Catalog } from '@entities/catalog.entity';
import { CatalogDetail } from '@entities/catalog-detail.entity';

define(CatalogDetail, () => {
  const code = faker.commerce.product();
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  const status = faker.datatype.boolean();
  const creationUser = faker.name.fullName();

  const catalogDetail = new CatalogDetail();
  catalogDetail.code = code;
  catalogDetail.name = name;
  catalogDetail.description = description;
  catalogDetail.catalogId = factory(Catalog)() as any;
  catalogDetail.creationUser = creationUser;
  catalogDetail.status = status;

  return catalogDetail;
});
