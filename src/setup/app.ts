import fastify from "fastify";

import { healthCheckRoutes } from "../routes/health-check";

type MakeAppParams = Parameters<typeof fastify>[0];

function makeApp(opts: MakeAppParams = {}) {
  const app = fastify(opts);

  app.register(healthCheckRoutes);

  return app;
}

export { makeApp }
