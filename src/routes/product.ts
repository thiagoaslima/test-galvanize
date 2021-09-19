import { FastifyInstance } from "fastify";
import { LoadProductController } from "../controllers/load-product";

export const productRoutes = async (app: FastifyInstance) => {
    const loadProductController = new LoadProductController();
    
    app.get('/product/:productId', loadProductController.handle);
}