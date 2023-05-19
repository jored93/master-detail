import 'reflect-metadata'; // this shim is required
import { PORT, TYPEORM_PORT, TESTING_ENV, CI_ENV } from '@config';
import connection from '@database/connection';
import app from '@app';

const handleConnection = async () => {
  // run express application on given port
  if (!TESTING_ENV && !CI_ENV) {
    app.listen(PORT, () => {
      return console.log(
        `Server is listening on ${PORT}
Postgres database is listening on port ${TYPEORM_PORT}`
      );
    });
  }
};

connection.create(handleConnection);
