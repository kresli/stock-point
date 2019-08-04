import { StockDataType, StockSymbol } from "../shared";
export interface Request {
    fn: "TIME_SERIES_MONTHLY_ADJUSTED";
    symbol: StockSymbol;
    datatype?: StockDataType;
    apiKey: string;
}
