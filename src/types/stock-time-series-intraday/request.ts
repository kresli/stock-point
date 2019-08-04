import {
  StockDataType,
  StockInterval,
  StockOutputSize,
  StockSymbol
} from "../shared";
export interface Request {
  fn: "TIME_SERIES_INTRADAY";
  symbol: StockSymbol;
  interval: StockInterval;
  outputsize?: StockOutputSize;
  datatype?: StockDataType;
  apiKey: string;
}
