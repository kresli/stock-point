import { Response } from "./response";
export const serialize = <R extends Response>(response: R) => ({
  meta: serializeMeta(response["Meta Data"]),
  data: serializeData(response["Monthly Adjusted Time Series"])
});

const serializeMeta = <M extends Response["Meta Data"]>(meta: M) => ({
  information: meta["1. Information"],
  symbol: meta["2. Symbol"],
  updated: meta["3. Last Refreshed"],
  zone: meta["4. Time Zone"]
});

const serializeData = (data: Response["Monthly Adjusted Time Series"]) =>
  Object.entries(data).reduce(
    (serialized, [date, serie]) => ({
      ...serialized,
      [date]: {
        open: serie["1. open"],
        high: serie["2. high"],
        low: serie["3. low"],
        close: serie["4. close"],
        adjucted: serie["5. adjusted close"],
        volume: serie["6. volume"],
        divident: serie["7. dividend amount"]
      }
    }),
    {}
  );
