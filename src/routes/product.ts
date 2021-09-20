import { FastifyInstance, FastifyRequest } from "fastify";
import { makeLoadExchangeConvertedProductController } from "../controllers/factories/load-exchange-converted-product";
import { makeLoadProductController } from "../controllers/factories/load-product";
import { Currency } from "../domain/models/currency";
import { InvalidParameterError } from "./errors/invalid-parameter";

type ProductRequest = FastifyRequest<{
    Params: { productId: string };
}>

type ExchangeProductRequest = FastifyRequest<{
    Params: { productId: string, currency: string };
}>

const loadProductController = makeLoadProductController();

export const productRoutes = async (app: FastifyInstance) => {
    
    app.get('/product/:productId', async (req: ProductRequest, res) => {
        const { statusCode, response } = await loadProductController.handle({
            productId: Number(req.params.productId)
        });

        res.code(statusCode).send(response)
    });
    
    app.get('/product/:productId/:currency', async (req: ExchangeProductRequest, res) => {
        const currency = req.params.currency.toUpperCase() as Currency;

        if (!Object.keys(Currency).includes(currency)) {
            throw new InvalidParameterError('currency');
        }

        const controller = makeLoadExchangeConvertedProductController();
        const { statusCode, response } = await controller.handle({
            productId: Number(req.params.productId),
            currency
        });

        
        res.code(statusCode).send(response) 
    });
}