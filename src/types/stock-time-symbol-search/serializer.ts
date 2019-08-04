import { Response } from "./response";

enum Key {
  Data = "bestMatches"
}

type Data = Response[Key.Data];

export const serialize = <R extends Response>(response: R) => ({
  data: serializeData(response[Key.Data])
});

const serializeData = <D extends Data>(data: D) =>
  data.map(d => ({
    symbol: d["1. symbol"],
    name: d["2. name"],
    type: d["3. type"],
    region: d["4. region"],
    marketOpen: d["5. marketOpen"],
    marketClose: d["6. marketClose"],
    zone: d["7. timezone"],
    currency: d["8. currency"],
    matchScore: d["9. matchScore"]
  }));
