import {
  IsBoolean,
  IsOptional,
  IsString,
  IsNumber,
  MaxLength,
  MinLength
} from 'class-validator';

export class CatalogUpdateDTO {
    @IsString()
    @MinLength(3)
    @MaxLength(60)
      name!: string;

    @IsString()
    @MaxLength(500)
      description!: string;

    @IsNumber()
      level?: number;

    @IsBoolean()
    @IsOptional()
      active?: boolean;
}
