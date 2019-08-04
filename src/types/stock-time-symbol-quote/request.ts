import { StockDataType, StockSymbol } from "../shared";
export interface Request {
  fn: "GLOBAL_QUOTE";
  symbol: StockSymbol;
  datatype?: StockDataType;
  apiKey: string;
}
