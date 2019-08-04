var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var serialize = function (response) { return ({
    meta: serializeMeta(response["Meta Data"]),
    data: serializeData(response["Time Series (Daily)"])
}); };
var serializeMeta = function (meta) { return ({
    information: meta["1. Information"],
    symbol: meta["2. Symbol"],
    updated: meta["3. Last Refreshed"],
    size: meta["4. Output Size"],
    zone: meta["5. Time Zone"]
}); };
var serializeData = function (data) {
    return Object.entries(data).reduce(function (serialized, _a) {
        var _b;
        var date = _a[0], serie = _a[1];
        return (__assign({}, serialized, (_b = {}, _b[date] = {
            open: serie["1. open"],
            high: serie["2. high"],
            low: serie["3. low"],
            close: serie["4. close"],
            volume: serie["5. volume"]
        }, _b)));
    }, {});
};
