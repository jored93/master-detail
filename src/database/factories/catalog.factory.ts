import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Catalog } from '@entities/catalog.entity';

define(Catalog, () => {
  const name = faker.commerce.productName();
  const code = faker.commerce.product();
  const description = faker.commerce.productDescription();
  const active = faker.datatype.boolean();
  const creationUser = faker.name.fullName();

  const catalog = new Catalog();
  catalog.name = name;
  catalog.code = code;
  catalog.description = description;
  catalog.active = active;
  catalog.creationUser = creationUser;

  return catalog;
});
