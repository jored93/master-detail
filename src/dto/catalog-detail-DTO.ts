import { IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class CatalogDetailDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
    code!: string;

  @IsString()
  @MinLength(10)
  @MaxLength(100)
    name!: string;

  @IsString()
  @MaxLength(200)
    description!: string;

  @IsString()
    catalogId!: string;

  @IsBoolean()
  @IsOptional()
    status?: boolean;
}
