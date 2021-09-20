import { HttpController } from "../types/http";
import { noContent, successResponse } from "../helpers/http-response";
import { LoadProduct } from "../../domain/usecases/load-product";

export class LoadProductController implements HttpController<LoadProduct.Input, LoadProduct.Response> {

    constructor(private provider: LoadProduct) {}
    
    async handle(request: LoadProduct.Input) {
        const product = await this.provider.load(request.productId);

        if (!product) {
            return noContent(`No product found`);
        }

        return successResponse(product);
    }
}