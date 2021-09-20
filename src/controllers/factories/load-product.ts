import { DbLoadProductProvider } from "../../data/providers/load-product";
import { PostgresProductRepository } from "../../infra/postgres/load-product";
import { LoadProductController } from "../controllers/load-product";

export const makeLoadProductController = (): LoadProductController => {
  const repository = new PostgresProductRepository();
  const provider = new DbLoadProductProvider(repository);
  const controller = new LoadProductController(provider);
  return controller;
}