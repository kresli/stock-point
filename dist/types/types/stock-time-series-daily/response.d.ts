import { StockOutputSize, StockSymbol } from "../shared";
export interface Response {
    "Meta Data": {
        "1. Information": string;
        "2. Symbol": StockSymbol;
        "3. Last Refreshed": string;
        "4. Output Size": StockOutputSize;
        "5. Time Zone": "US/Eastern";
    };
    "Time Series (Daily)": {
        [date: string]: {
            "1. open": string;
            "2. high": string;
            "3. low": string;
            "4. close": string;
            "5. volume": string;
        };
    };
}
