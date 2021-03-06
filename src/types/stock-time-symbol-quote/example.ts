import { Response } from "./response";

export const exampleUrl =
  "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo";
export const exampleData = {
  "Global Quote": {
    "01. symbol": "MSFT",
    "02. open": "138.0900",
    "03. high": "138.3165",
    "04. low": "135.2600",
    "05. price": "136.9000",
    "06. volume": "30791624",
    "07. latest trading day": "2019-08-02",
    "08. previous close": "138.0600",
    "09. change": "-1.1600",
    "10. change percent": "-0.8402%"
  }
} as Response;
