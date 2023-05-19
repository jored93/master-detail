import { IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class CatalogDetailUpdateDTO {
  @IsString()
  @MinLength(20)
  @MaxLength(20)
    code!: string;

  @IsString()
  @MinLength(100)
  @MaxLength(100)
    name!: string;

  @IsString()
  @MaxLength(200)
    description!: string;

  @IsString()
    catalogId!: string;

  @IsBoolean()
  @IsOptional()
    active?: boolean;
}
