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
import { CatalogDetail } from '@entities/catalog-detail.entity';
import { CatalogDetailService } from '@services/catalog-detail.service';
import { OptionQuery } from '@queries/option.query';
import { CatalogDetailDTO } from '@dto/catalog-detail-DTO';
import { CatalogDetailUpdateDTO } from '@dto/catalog-detail-update-DTO';
import { ErrorsMessages } from '../constants/errorMessages';
import { EntityMapper } from '@clients/mapper/entityMapper.service';

@JsonController('/catalog-detail')
@Service()
export class CatalogDetailController {
  constructor(private readonly catalogDetailService: CatalogDetailService) {}

  @Get()
  async index(@QueryParams() query: OptionQuery): Promise<any> {
    return this.catalogDetailService.findAll(query);
  }

  @Get('/:id')
  async getCatalogDetailById(@QueryParams() query: OptionQuery,
    @Param('id') id: string): Promise<any> {
    const where = { id };
    return this.catalogDetailService.findAll(query, where);
  }

  @Post()
  async post(@Body() catalogDetailDTO: CatalogDetailDTO): Promise<InsertResult> {
    try {
      return await this.catalogDetailService.createCatalogDetail(
        EntityMapper.mapTo(CatalogDetail, catalogDetailDTO)
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
    @Body() catalogDetailUpdateDTO: CatalogDetailUpdateDTO
  ): Promise<UpdateResult> {
    const catalogDetail: CatalogDetail =
      EntityMapper.mapTo(CatalogDetail, catalogDetailUpdateDTO);
    return this.catalogDetailService.editCatalogDetail({ id, catalogDetail });
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.catalogDetailService.deleteCatalogDetail(id);
  }
}
