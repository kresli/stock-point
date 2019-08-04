import { StockDataType, StockSymbol } from "../shared";
export interface Request {
  fn: "TIME_SERIES_WEEKLY";
  symbol: StockSymbol;
  datatype?: StockDataType;
  apiKey: string;
}
