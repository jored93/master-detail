import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { Catalog } from '@entities/catalog.entity';

define(Catalog, () => {
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  const level = faker.datatype.number();
  const status = faker.datatype.boolean();
  const creationUser = faker.name.fullName();

  const catalog = new Catalog();
  catalog.name = name;
  catalog.description = description;
  catalog.level = level;
  catalog.status = status;
  catalog.creationUser = creationUser;

  return catalog;
});
