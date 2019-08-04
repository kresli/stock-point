import { Response } from "./response";
export declare const serialize: <R extends Response>(response: R) => {
    meta: {
        information: string;
        symbol: string;
        updated: string;
        size: import("../shared").StockOutputSize;
        zone: "US/Eastern";
    };
    data: {};
};
