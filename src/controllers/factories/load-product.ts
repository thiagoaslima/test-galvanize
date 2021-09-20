import { DbLoadProductProvider } from "../../providers/load-product";
import { LoadProductController } from "../load-product/load-product";

export const makeLoadProductController = (): LoadProductController => {
  const provider = new DbLoadProductProvider();
  const controller = new LoadProductController(provider);
  return controller;
}