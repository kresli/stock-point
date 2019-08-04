import { StockInterval, StockOutputSize, StockSymbol } from "../shared";
export declare type Response = {
    "Meta Data": MetaData;
    "Time Series (5min)": Series;
} | {
    "Meta Data": MetaData;
    "Time Series (10min)": Series;
} | {
    "Meta Data": MetaData;
    "Time Series (15min)": Series;
} | {
    "Meta Data": MetaData;
    "Time Series (30min)": Series;
} | {
    "Meta Data": MetaData;
    "Time Series (60min)": Series;
};
interface MetaData {
    "1. Information": string;
    "2. Symbol": StockSymbol;
    "3. Last Refreshed": string;
    "4. Interval": StockInterval;
    "5. Output Size": StockOutputSize;
    "6. Time Zone": "US/Eastern";
}
interface Series {
    [date: string]: {
        "1. open": string;
        "2. high": string;
        "3. low": string;
        "4. close": string;
        "5. volume": string;
    };
}
export {};
