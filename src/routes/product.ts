import { FastifyInstance, FastifyRequest } from "fastify";
import { LoadProductController } from "../controllers/load-product";

type ProductRequest = FastifyRequest<{
    Params: { productId: string };
  }>

export const productRoutes = async (app: FastifyInstance) => {
    
    app.get('/product/:productId', (req: ProductRequest, res) => {
        const loadProductController = new LoadProductController();
        const response = loadProductController.handle({
            productId: Number(req.params.productId)
        });

        res.code(response.statusCode).send(response.data)
    });
}