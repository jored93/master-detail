import { routingControllersToSpec } from 'routing-controllers-openapi';
import * as swaggerUiExpress from 'swagger-ui-express';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { name, description, version, author } from '../package.json';

export const swaggerSpec = (
  getMetadataArgsStorage,
  routingControllersOptions,
  app) => {
  // Parse class-validator classes into JSON Schema:
  const schemas: any = validationMetadatasToSchemas({
    refPointerPrefix: '#/components/schemas/'
  });

  // Parse routing-controllers classes into OpenAPI spec:
  const storage = getMetadataArgsStorage();
  const spec = routingControllersToSpec(
    storage,
    routingControllersOptions, {
      components: {
        schemas
      },
      security: [],
      info: {
        description: `${description}`,
        title: `${name}`,
        version: `${version}`
      }
    });
  /* http://localhost:3000/devenginec/master-detail/docs/ */
  app.use(`/${author}/${name}/docs`,
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(spec)
  );
};
