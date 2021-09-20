import { HttpController, NoContentResponse } from "../types/http";
import { noContent, serverError, successResponse } from "../helpers/http-response";
import { LoadProduct } from "../../domain/usecases/load-product";
import { ConvertExchange } from "../../domain/usecases/convert-exchange";
import { Currency } from "../../domain/models/currency";
import { ExchangeConvertedProduct } from "../viewModels/exchange-converted-product";

export class LoadExchangeConvertedProductController 
    implements HttpController<{ productId: number, currency: Currency }, ExchangeConvertedProduct | NoContentResponse | { error: Error }> {

    constructor(
        private productProvider: LoadProduct,
        private exchangeProvider: ConvertExchange
    ) { }

    async handle(request: { productId: number, currency: Currency }) {
        try {
            const product = await this.productProvider.load(request.productId);

            if (!product) {
                return noContent(`No product with productId ${request.productId} found`);
            }

            const exchangeConversion = await this.exchangeProvider.convert({
                price: product.price,
                currency: request.currency
            });

            const viewModel = {
                ...product,
                ...exchangeConversion
            };

            return successResponse(viewModel);
        } catch (err) {
            return serverError(err as Error)
        }
    }
}