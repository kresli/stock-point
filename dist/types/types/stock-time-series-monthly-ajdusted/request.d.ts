import { StockDataType, StockSymbol } from "../shared";
export interface Request {
    fn: "TIME_SERIES_WEEKLY_ADJUSTED";
    symbol: StockSymbol;
    datatype?: StockDataType;
    apiKey: string;
}
