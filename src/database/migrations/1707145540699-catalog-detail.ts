import { MigrationInterface, QueryRunner } from 'typeorm';

export class catalogDetail1707145540699 implements MigrationInterface {
  name = 'catalogDetail1707145540699';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line quotes, max-len
      `CREATE TABLE "catalog_detail" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "creation_user" character varying NOT NULL, "update_user" character varying, "code" character varying(20) NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(200), "catalog_id" uuid NOT NULL, "active" boolean DEFAULT true, CONSTRAINT "PK_cf43095a6cbbac1cf474d890b27" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      // eslint-disable-next-line quotes, max-len
      `ALTER TABLE "catalog_detail" ADD CONSTRAINT "FK_b403e10e2bebc298bfc63efc006" FOREIGN KEY ("catalog_id") REFERENCES "catalog"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      // eslint-disable-next-line quotes
      `ALTER TABLE "catalog_detail" DROP CONSTRAINT "FK_b403e10e2bebc298bfc63efc006"`
    );
    // eslint-disable-next-line quotes
    await queryRunner.query(`DROP TABLE "catalog_detail"`);
  }
}
