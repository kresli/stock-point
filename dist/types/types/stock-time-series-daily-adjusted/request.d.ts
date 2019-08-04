import { StockDataType, StockOutputSize, StockSymbol } from "../shared";
export interface Request {
    fn: "TIME_SERIES_DAILY_ADJUSTED";
    symbol: StockSymbol;
    outputsize?: StockOutputSize;
    datatype?: StockDataType;
    apiKey: string;
}
