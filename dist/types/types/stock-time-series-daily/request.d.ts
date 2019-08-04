import { StockDataType, StockOutputSize, StockSymbol } from "../shared";
export interface Request {
    fn: "TIME_SERIES_DAILY";
    symbol: StockSymbol;
    outputsize?: StockOutputSize;
    datatype?: StockDataType;
    apiKey: string;
}
