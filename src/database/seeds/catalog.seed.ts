import { Seeder, Factory } from 'typeorm-seeding';
import { Catalog } from '@entities/catalog.entity';

export default class implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Catalog)().createMany(2);
  }
}
