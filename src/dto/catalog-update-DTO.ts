import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator';

export class CatalogUpdateDTO {
    @IsString()
    @MinLength(3)
    @MaxLength(60)
      name!: string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
      code!: string;

    @IsString()
    @MaxLength(500)
      description!: string;

    @IsBoolean()
    @IsOptional()
      active?: boolean;
}
