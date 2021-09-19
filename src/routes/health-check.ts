import { FastifyInstance } from "fastify";

export const healthCheckRoutes = async (app: FastifyInstance) => {
    app.get('/healthcheck', (_req, res): any => {
        res.code(200);
        res.send({
          status: 'ok',
          time: Date.now()
        })
    });
    return app;
}