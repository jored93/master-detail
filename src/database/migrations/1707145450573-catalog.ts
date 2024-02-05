/* eslint-disable quotes */
/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class catalog1707145450573 implements MigrationInterface {
  name = 'catalog1707145450573';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line quotes
      `CREATE TABLE "catalog" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "creation_user" character varying NOT NULL, "update_user" character varying, "name" character varying(60) NOT NULL, "code" character varying(20) NOT NULL, "description" character varying(500), "active" boolean DEFAULT true, CONSTRAINT "PK_782754bded12b4e75ad4afff913" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      // eslint-disable-next-line quotes
      `CREATE UNIQUE INDEX "IDX_408ad15a08984a8e9b0619ee3e" ON "catalog" ("name") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_408ad15a08984a8e9b0619ee3e"`
    );
    await queryRunner.query(`DROP TABLE "catalog"`);
  }
}
