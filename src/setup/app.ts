import fastify from "fastify";

import { healthCheckRoutes } from "../routes/health-check";
import { productRoutes } from "../routes/product";

type MakeAppParams = Parameters<typeof fastify>[0];

function makeApp(opts: MakeAppParams = {}) {
  const app = fastify(opts);

  app.register(healthCheckRoutes);
  app.register(productRoutes);

  return app;
}

export { makeApp }
