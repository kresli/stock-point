import { Response } from "./response";

enum Key {
  Data = "Global Quote"
}

type Data = Response[Key.Data];

export const serialize = <R extends Response>(response: R) => ({
  data: serializeData(response[Key.Data])
});

const serializeData = <D extends Data>(data: D) => ({
  symbol: data["01. symbol"],
  open: data["02. open"],
  high: data["03. high"],
  low: data["04. low"],
  price: data["05. price"],
  volume: data["06. volume"],
  latestTradingDay: "07. latest trading day",
  prevousClose: data["08. previous close"],
  change: "09. change",
  changePercent: data["10. change percent"]
});
