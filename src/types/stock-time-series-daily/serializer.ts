import { Response } from "./response";

enum Key {
  Data = "Time Series (Daily)",
  Meta = "Meta Data"
}

type Meta = Response[Key.Meta];
type Data = Response[Key.Data];

export const serialize = <R extends Response>(response: R) => ({
  meta: serializeMeta(response[Key.Meta]),
  data: serializeData(response[Key.Data])
});

const serializeMeta = <M extends Meta>(meta: M) => ({
  information: meta["1. Information"],
  symbol: meta["2. Symbol"],
  updated: meta["3. Last Refreshed"],
  size: meta["4. Output Size"],
  zone: meta["5. Time Zone"]
});

const serializeData = <D extends Data>(data: D) =>
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
