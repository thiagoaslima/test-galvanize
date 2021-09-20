import { FastifyInstance, FastifyRequest } from "fastify";
import { makeLoadProductController } from "../controllers/factories/load-product";

type ProductRequest = FastifyRequest<{
    Params: { productId: string };
}>

export const productRoutes = async (app: FastifyInstance) => {
    
    app.get('/product/:productId', async (req: ProductRequest, res) => {
        const loadProductController = makeLoadProductController();
        const response = await loadProductController.handle({
            productId: Number(req.params.productId)
        });

        res.code(response.statusCode).send(response.data)
    });
}