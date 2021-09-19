import { FastifyReply } from "fastify";

import { Product } from "../domain/product";
import { Currency } from "../domain/currency";
import { HttpController } from "./types/http";
import { successResponse } from "./helpers/http-response";


interface LoadProductControllerRequest {
    productId: number; 
    currency?: Currency
}

type LoadProductControllerResponse = Product;
export class LoadProductController implements HttpController<LoadProductControllerRequest, LoadProductControllerResponse> {
    handle(req: LoadProductControllerRequest) {
        const product: Product = {
            id: 1,
            name: 'Product 1',
            price: {
                valueCents: 100,
                currency: Currency.USD
            }
        };

        return successResponse(product)
    }
}