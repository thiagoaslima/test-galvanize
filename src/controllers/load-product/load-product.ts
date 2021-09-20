import { noContent, successResponse } from "../helpers/http-response";
import { LoadProduct } from "../../domain/usecases/load-product";
import { HttpController } from "../types/http";

export class LoadProductController implements HttpController<LoadProduct.Input, LoadProduct.Response> {

    constructor(private provider: LoadProduct) {}
    
    async handle(request: LoadProduct.Input) {
        const product = await this.provider.load(request.productId);

        if (!product) {
            return noContent(`No product with productId ${request.productId} found`);
        }

        return successResponse(product);
    }
}