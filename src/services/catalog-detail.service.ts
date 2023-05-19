import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { CatalogDetail } from '@entities/catalog-detail.entity';
import { CatalogDetailInterface } from '@interfaces';
import { IQueryOptions } from 'src/interfaces/query/query-options.interface';
import { OptionQuery } from 'src/queries/option.query';
import { QueryService } from '@services/query.service';

@Service()
export class CatalogDetailService {
  constructor(private queryService: QueryService) {}

  private readonly catalogDetailRepository = getRepository<CatalogDetail>(CatalogDetail);

  findAll(query: OptionQuery, where?: any) {
    const options: IQueryOptions = {};
    if (query.relations && query.relations?.length > 0) {
      query.relations += ',catalog';
    } else {
      query.relations = 'catalog';
    }
    options.where = { ...options.where };
    options.relations = this.queryService.getRelations(query.relations);
    return this.queryService.paginate(this.catalogDetailRepository, query, where);
  }

  createCatalogDetail(catalogDetail: CatalogDetail) {
    return this.catalogDetailRepository.insert(catalogDetail);
  }

  editCatalogDetail(input: CatalogDetailInterface.IEditCatalogDetailInput) {
    const { id, catalogDetail } = input;
    return this.catalogDetailRepository.update(id, catalogDetail);
  }

  deleteCatalogDetail(id: string) {
    return this.catalogDetailRepository.delete(id);
  }
}
