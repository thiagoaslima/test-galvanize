import { FastifyReply } from "fastify";

import { Product } from "../domain/product";
import { Currency } from "../domain/currency";

export class LoadProductController {
    handle(req: any, res: FastifyReply) {
        const product: Product = {
            id: 1,
            name: 'Product 1',
            price: {
                valueCents: 100,
                currency: Currency.USD
            }
        };

        res.code(200);
        res.send(product);
    }
}