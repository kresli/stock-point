import { Response } from "./response";

type Meta = Response["Meta Data"];
type Data = Response["Weekly Adjusted Time Series"];

export const serialize = <R extends Response>(response: R) => ({
  meta: serializeMeta(response["Meta Data"]),
  data: serializeData(response["Weekly Adjusted Time Series"])
});

const serializeMeta = <M extends Meta>(meta: M) => ({
  information: meta["1. Information"],
  symbol: meta["2. Symbol"],
  updated: meta["3. Last Refreshed"],
  zone: meta["4. Time Zone"]
});

const serializeData = (data: Data) =>
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
