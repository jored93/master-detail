import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParams,
  BadRequestError
} from 'routing-controllers';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Service } from 'typedi';
import { Catalog } from '@entities/catalog.entity';
import { CatalogService } from '@services/catalog.service';
import { OptionQuery } from '@queries/option.query';
import { CatalogDTO } from '@dto/catalog-DTO';
import { CatalogUpdateDTO } from '@dto/catalog-update-DTO';
import { ErrorsMessages } from '../constants/errorMessages';
import { EntityMapper } from '@clients/mapper/entityMapper.service';

@JsonController('/catalog')
@Service()
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}


  @Get()
  async index(@QueryParams() query: OptionQuery): Promise<any> {
    return this.catalogService.findAll(query);
  }

  @Get('/:id')
  async getById(@QueryParams() query: OptionQuery,
    @Param('id') id: string): Promise<any> {
    const where = { id };
    return this.catalogService.findAll(query, where);
  }

  @Post()
  async post(@Body() catalogDTO: CatalogDTO): Promise<InsertResult> {
    try {
      return await this.catalogService.createCatalog(
        EntityMapper.mapTo(Catalog, catalogDTO)
      );
    } catch (error: any) {
      throw new BadRequestError(
        error.detail ?? error.message ?? ErrorsMessages.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Put('/:id')
  async put(
    @Param('id') id: string,
    @Body() catalogUpdateDTO: CatalogUpdateDTO
  ): Promise<UpdateResult> {
    const catalog: Catalog = EntityMapper.mapTo(Catalog, catalogUpdateDTO);
    return this.catalogService.editCatalog({ id, catalog });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.catalogService.deleteUser(id);
  }
}
