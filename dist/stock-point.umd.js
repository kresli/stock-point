(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.mstb = {}));
}(this, function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  const serialize = response => ({
    meta: serializeMeta(response["Meta Data"]),
    data: serializeData(response["Time Series (Daily)"])
  });

  const serializeMeta = meta => ({
    information: meta["1. Information"],
    symbol: meta["2. Symbol"],
    updated: meta["3. Last Refreshed"],
    size: meta["4. Output Size"],
    zone: meta["5. Time Zone"]
  });

  const serializeData = data => Object.entries(data).reduce((serialized, [date, serie]) => _objectSpread2({}, serialized, {
    [date]: {
      open: serie["1. open"],
      high: serie["2. high"],
      low: serie["3. low"],
      close: serie["4. close"],
      volume: serie["5. volume"]
    }
  }), {});

  exports.stockTimeSeriesDailySerialize = serialize;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
