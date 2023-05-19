import { Seeder, Factory } from 'typeorm-seeding';
import { CatalogDetail } from '@entities/catalog-detail.entity';

export default class implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(CatalogDetail)().createMany(2);
  }
}
