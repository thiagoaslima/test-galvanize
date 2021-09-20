import { ConvertExchangeProvider } from "../../data/providers/convert-exchange";
import { DbLoadProductProvider } from "../../data/providers/load-product";
import { PostgresProductRepository } from "../../infra/postgres/load-product";
import { RemoteConvertExchangeRepository } from "../../infra/remote-convert-exchange";
import { LoadExchangeConvertedProductController } from "../controllers/load-exchange-converted-product";


export const makeLoadExchangeConvertedProductController = (): LoadExchangeConvertedProductController => {
  const exchangeRepository = new RemoteConvertExchangeRepository();
  const exchangeProvider = new ConvertExchangeProvider(exchangeRepository);
  const loadRepository = new PostgresProductRepository();
  const loadProvider = new DbLoadProductProvider(loadRepository);
  const controller = new LoadExchangeConvertedProductController(loadProvider, exchangeProvider);
  return controller;
}