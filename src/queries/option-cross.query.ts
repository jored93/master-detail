import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';
export class OptionQueryResourcePermission {
  @IsString()
  @IsOptional()
    resourceUuid?: string;

  @IsString()
  @IsOptional()
    sharedRoleId?: string;

  @IsBoolean()
  @IsOptional()
    canRead!: boolean;

  @IsBoolean()
  @IsOptional()
    canWrite!: boolean;

  @IsString()
  @IsOptional()
  @JSONSchema({ example: 'relation1,relation2' })
    relations?: string;
}
