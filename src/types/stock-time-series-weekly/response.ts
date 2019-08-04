import { StockSymbol } from "../shared";

export interface Response {
  "Meta Data": {
    "1. Information": string;
    "2. Symbol": StockSymbol;
    "3. Last Refreshed": string;
    "6. Time Zone": string;
  };
  "Weekly Time Series": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "6. volume": string;
    };
  };
}
