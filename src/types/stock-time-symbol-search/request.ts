import { StockDataType } from "../shared";
export interface Request {
  fn: "SYMBOL_SEARCH";
  keywords: string;
  datatype?: StockDataType;
  apiKey: string;
}
