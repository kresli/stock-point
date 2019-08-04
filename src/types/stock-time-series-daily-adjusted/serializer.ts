import { Response } from "./response";
export const serialize = <R extends Response>(response: R) => ({
  meta: serializeMeta(response["Meta Data"]),
  data: serializeData(response["Time Series (Daily)"])
});

const serializeMeta = <M extends Response["Meta Data"]>(meta: M) => ({
  information: meta["1. Information"],
  symbol: meta["2. Symbol"],
  updated: meta["3. Last Refreshed"],
  size: meta["4. Output Size"],
  zone: meta["5. Time Zone"]
});

const serializeData = (data: Response["Time Series (Daily)"]) =>
  Object.entries(data).reduce(
    (serialized, [date, serie]) => ({
      ...serialized,
      [date]: {
        open: serie["1. open"],
        high: serie["2. high"],
        low: serie["3. low"],
        close: serie["4. close"],
        adjusted: serie["5. adjusted close"],
        volume: serie["6. volume"],
        divident: serie["7. dividend amount"],
        split: serie["8. split coefficient"]
      }
    }),
    {}
  );
