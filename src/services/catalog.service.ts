import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { Catalog } from '@entities/catalog.entity';
import { CatalogInterface } from '@interfaces';

import { OptionQuery } from 'src/queries/option.query';
import { QueryService } from '@services/query.service';

@Service()
export class CatalogService {
  constructor(private queryService: QueryService) {}

  private readonly catalogRepository = getRepository<Catalog>(Catalog);

  findAll(query: OptionQuery, where?: any) {
    return this.queryService.paginate(this.catalogRepository, query, where);
  }

  listCatalog() {
    return this.catalogRepository.find();
  }

  showCatalog(id: number) {
    return this.catalogRepository.findOne(id);
  }

  createCatalog(catalog: Catalog) {
    return this.catalogRepository.insert(catalog);
  }

  editCatalog(input: CatalogInterface.IEditCatalogInput) {
    const { id, catalog } = input;
    return this.catalogRepository.update(id, catalog);
  }

  deleteUser(id: string) {
    return this.catalogRepository.delete(id);
  }
}
