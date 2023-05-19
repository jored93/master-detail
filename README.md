# Master detail project

This repository provides a sample implementation of a master-detail project using TypeScript as the programming language, TypeORM as the object-relational mapping (ORM) tool, and CockroachDB as the database.

The project demonstrates a common scenario where a master entity (e.g., "Catalog") is associated with multiple detail entities (e.g., "Catalog-detail"). The code showcases best practices for structuring the project, handling data persistence with TypeORM, and setting up a CockroachDB database.

## Basic Requirements

1. Install Node.js (lts-version v18.12.1)
2. Install `yarn` if not present `curl -o- -L https://yarnpkg.com/install.sh | bash` (macOS and generic Unix environments)
3. Install required dependencies by `yarn`
4. `cp .example.env .env.dev`
5. `cp .example.env.test .env.test`
6. Create your CockroachDB (surely you should download the certificate issued by cockroachDB on your computer)
7. Run `ENV=[dev, test, prod] yarn db:setup`.
8. Start your server with `ENV=[dev, prod] yarn dev`.

## Some scripts

Add `ENV=[dev, prod]` before running scripts.
Why?: [Configuration file used by Typeorm](https://typeorm.io/#/using-ormconfig/which-configuration-file-is-used-by-typeorm)

Run `yarn build` to build js from typescript source.

Run `yarn start` to start the server from the compiled folder (/dist).

Run `yarn test` to run tests.

Run `yarn dev` to start and automatically detect any source-code changes, restarting the server as well.

Run `yarn typeorm schema:drop` to drop your schema of the DB.

Run `yarn typeorm schema:sync` to resync the schema of your DB.

Run `yarn seed:run` to run seed files.

Run `yarn db:reset` to drop schema and re run it, then seed the DB.

Run `yarn typeorm migration:generate -n <migration's name>` to create a new migration.

Run `yarn typeorm migration:run` to run pending migrations.

Run `yarn typeorm migration:revert` to rollback migrations.

Run `yarn typeorm migration:show` to see the list of all migrations (pending and also ran).