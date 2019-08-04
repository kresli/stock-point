import { Response, Series } from "./response";
export const serialize = <R extends Response>(response: R) => ({
  meta: serializeMeta(response["Meta Data"]),
  data: serializeData(
    response["Time Series (5min)"] ||
      response["Time Series (10min)"] ||
      response["Time Series (15min)"] ||
      response["Time Series (30min)"] ||
      response["Time Series (60min)"]!
  )
});

const serializeMeta = <M extends Response["Meta Data"]>(meta: M) => ({
  information: meta["1. Information"],
  symbol: meta["2. Symbol"],
  updated: meta["3. Last Refreshed"],
  interval: meta["4. Interval"],
  size: meta["5. Output Size"],
  zone: meta["6. Time Zone"]
});

const serializeData = (data: Series) =>
  Object.entries(data).reduce(
    (serialized, [date, serie]) => ({
      ...serialized,
      [date]: {
        open: serie["1. open"],
        high: serie["2. high"],
        low: serie["3. low"],
        close: serie["4. close"],
        volume: serie["5. volume"]
      }
    }),
    {}
  );
