import { Response } from "./response";

export const exampleUrl =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo";
export const exampleData = {
  "Meta Data": {
    "1. Information": "Daily Prices (open, high, low, close) and Volumes",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2019-08-02",
    "4. Output Size": "Compact",
    "5. Time Zone": "US/Eastern"
  },
  "Time Series (Daily)": {
    "2019-08-02": {
      "1. open": "138.0900",
      "2. high": "138.3200",
      "3. low": "135.2600",
      "4. close": "136.9000",
      "5. volume": "30781971"
    },
    "2019-08-01": {
      "1. open": "137.0000",
      "2. high": "140.9383",
      "3. low": "136.9300",
      "4. close": "138.0600",
      "5. volume": "40557481"
    },
    "2019-07-31": {
      "1. open": "140.3300",
      "2. high": "140.4900",
      "3. low": "135.0800",
      "4. close": "136.2700",
      "5. volume": "38598765"
    },
    "2019-07-30": {
      "1. open": "140.1400",
      "2. high": "141.2199",
      "3. low": "139.8005",
      "4. close": "140.3500",
      "5. volume": "16846507"
    },
    "2019-07-29": {
      "1. open": "141.5000",
      "2. high": "141.5100",
      "3. low": "139.3663",
      "4. close": "141.0300",
      "5. volume": "16605849"
    },
    "2019-07-26": {
      "1. open": "140.3700",
      "2. high": "141.6750",
      "3. low": "140.3000",
      "4. close": "141.3400",
      "5. volume": "19037579"
    },
    "2019-07-25": {
      "1. open": "140.4300",
      "2. high": "140.6100",
      "3. low": "139.3215",
      "4. close": "140.1900",
      "5. volume": "18356838"
    },
    "2019-07-24": {
      "1. open": "138.9000",
      "2. high": "140.7400",
      "3. low": "138.8500",
      "4. close": "140.7200",
      "5. volume": "20738254"
    },
    "2019-07-23": {
      "1. open": "139.7600",
      "2. high": "139.9900",
      "3. low": "138.0300",
      "4. close": "139.2900",
      "5. volume": "18034568"
    },
    "2019-07-22": {
      "1. open": "137.4100",
      "2. high": "139.1900",
      "3. low": "137.3300",
      "4. close": "138.4300",
      "5. volume": "25080739"
    },
    "2019-07-19": {
      "1. open": "140.2200",
      "2. high": "140.6700",
      "3. low": "136.4500",
      "4. close": "136.6200",
      "5. volume": "48992343"
    },
    "2019-07-18": {
      "1. open": "135.5500",
      "2. high": "136.6200",
      "3. low": "134.6700",
      "4. close": "136.4200",
      "5. volume": "30808686"
    },
    "2019-07-17": {
      "1. open": "137.7000",
      "2. high": "137.9300",
      "3. low": "136.2200",
      "4. close": "136.2700",
      "5. volume": "20210935"
    },
    "2019-07-16": {
      "1. open": "138.9600",
      "2. high": "139.0500",
      "3. low": "136.5200",
      "4. close": "137.0800",
      "5. volume": "22726107"
    },
    "2019-07-15": {
      "1. open": "139.4400",
      "2. high": "139.5400",
      "3. low": "138.4600",
      "4. close": "138.9000",
      "5. volume": "16651436"
    },
    "2019-07-12": {
      "1. open": "138.8500",
      "2. high": "139.1300",
      "3. low": "138.0099",
      "4. close": "138.9000",
      "5. volume": "18936811"
    },
    "2019-07-11": {
      "1. open": "138.2000",
      "2. high": "139.2200",
      "3. low": "137.8700",
      "4. close": "138.4000",
      "5. volume": "22327921"
    },
    "2019-07-10": {
      "1. open": "137.1300",
      "2. high": "138.5800",
      "3. low": "137.0200",
      "4. close": "137.8500",
      "5. volume": "24204341"
    },
    "2019-07-09": {
      "1. open": "136.0000",
      "2. high": "136.9700",
      "3. low": "135.8000",
      "4. close": "136.4600",
      "5. volume": "19953076"
    },
    "2019-07-08": {
      "1. open": "136.4000",
      "2. high": "137.1000",
      "3. low": "135.3701",
      "4. close": "136.9600",
      "5. volume": "16779727"
    },
    "2019-07-05": {
      "1. open": "135.9400",
      "2. high": "137.3300",
      "3. low": "135.7200",
      "4. close": "137.0600",
      "5. volume": "18141119"
    },
    "2019-07-03": {
      "1. open": "136.8000",
      "2. high": "137.7400",
      "3. low": "136.2950",
      "4. close": "137.4600",
      "5. volume": "13629275"
    },
    "2019-07-02": {
      "1. open": "136.1200",
      "2. high": "136.5900",
      "3. low": "135.3400",
      "4. close": "136.5800",
      "5. volume": "15237822"
    },
    "2019-07-01": {
      "1. open": "136.6300",
      "2. high": "136.7000",
      "3. low": "134.9700",
      "4. close": "135.6800",
      "5. volume": "22654139"
    },
    "2019-06-28": {
      "1. open": "134.5700",
      "2. high": "134.6000",
      "3. low": "133.1558",
      "4. close": "133.9600",
      "5. volume": "30042948"
    },
    "2019-06-27": {
      "1. open": "134.1400",
      "2. high": "134.7100",
      "3. low": "133.5100",
      "4. close": "134.1500",
      "5. volume": "16557461"
    },
    "2019-06-26": {
      "1. open": "134.3500",
      "2. high": "135.7400",
      "3. low": "133.6000",
      "4. close": "133.9300",
      "5. volume": "23657724"
    },
    "2019-06-25": {
      "1. open": "137.2500",
      "2. high": "137.5900",
      "3. low": "132.7300",
      "4. close": "133.4300",
      "5. volume": "33327399"
    },
    "2019-06-24": {
      "1. open": "137.0000",
      "2. high": "138.4000",
      "3. low": "137.0000",
      "4. close": "137.7800",
      "5. volume": "20628820"
    },
    "2019-06-21": {
      "1. open": "136.5800",
      "2. high": "137.7300",
      "3. low": "136.4600",
      "4. close": "136.9700",
      "5. volume": "36727871"
    },
    "2019-06-20": {
      "1. open": "137.4500",
      "2. high": "137.6600",
      "3. low": "135.7200",
      "4. close": "136.9500",
      "5. volume": "33042571"
    },
    "2019-06-19": {
      "1. open": "135.0000",
      "2. high": "135.9300",
      "3. low": "133.8100",
      "4. close": "135.6900",
      "5. volume": "23744420"
    },
    "2019-06-18": {
      "1. open": "134.1900",
      "2. high": "135.2400",
      "3. low": "133.5700",
      "4. close": "135.1600",
      "5. volume": "25934437"
    },
    "2019-06-17": {
      "1. open": "132.6300",
      "2. high": "133.7300",
      "3. low": "132.5300",
      "4. close": "132.8500",
      "5. volume": "14517764"
    },
    "2019-06-14": {
      "1. open": "132.2600",
      "2. high": "133.7900",
      "3. low": "131.6400",
      "4. close": "132.4500",
      "5. volume": "17821682"
    },
    "2019-06-13": {
      "1. open": "131.9800",
      "2. high": "132.6700",
      "3. low": "131.5600",
      "4. close": "132.3200",
      "5. volume": "17200827"
    },
    "2019-06-12": {
      "1. open": "131.4000",
      "2. high": "131.9700",
      "3. low": "130.7100",
      "4. close": "131.4900",
      "5. volume": "17092443"
    },
    "2019-06-11": {
      "1. open": "133.8800",
      "2. high": "134.2400",
      "3. low": "131.2757",
      "4. close": "132.1000",
      "5. volume": "23913710"
    },
    "2019-06-10": {
      "1. open": "132.4000",
      "2. high": "134.0800",
      "3. low": "132.0000",
      "4. close": "132.6000",
      "5. volume": "26477077"
    },
    "2019-06-07": {
      "1. open": "129.1900",
      "2. high": "132.2500",
      "3. low": "128.2600",
      "4. close": "131.4000",
      "5. volume": "33885567"
    },
    "2019-06-06": {
      "1. open": "126.4400",
      "2. high": "127.9700",
      "3. low": "125.6000",
      "4. close": "127.8200",
      "5. volume": "21458940"
    },
    "2019-06-05": {
      "1. open": "124.9500",
      "2. high": "125.8700",
      "3. low": "124.2100",
      "4. close": "125.8300",
      "5. volume": "24926119"
    },
    "2019-06-04": {
      "1. open": "121.2800",
      "2. high": "123.2800",
      "3. low": "120.6522",
      "4. close": "123.1600",
      "5. volume": "29382621"
    },
    "2019-06-03": {
      "1. open": "123.8500",
      "2. high": "124.3700",
      "3. low": "119.0100",
      "4. close": "119.8400",
      "5. volume": "37983616"
    },
    "2019-05-31": {
      "1. open": "124.2300",
      "2. high": "124.6150",
      "3. low": "123.3200",
      "4. close": "123.6800",
      "5. volume": "26646748"
    },
    "2019-05-30": {
      "1. open": "125.2600",
      "2. high": "125.7600",
      "3. low": "124.7800",
      "4. close": "125.7300",
      "5. volume": "16829592"
    },
    "2019-05-29": {
      "1. open": "125.3800",
      "2. high": "125.3900",
      "3. low": "124.0400",
      "4. close": "124.9400",
      "5. volume": "22763119"
    },
    "2019-05-28": {
      "1. open": "126.9800",
      "2. high": "128.0000",
      "3. low": "126.0500",
      "4. close": "126.1600",
      "5. volume": "23128338"
    },
    "2019-05-24": {
      "1. open": "126.9100",
      "2. high": "127.4150",
      "3. low": "125.9700",
      "4. close": "126.2400",
      "5. volume": "14123337"
    },
    "2019-05-23": {
      "1. open": "126.2000",
      "2. high": "126.2900",
      "3. low": "124.7400",
      "4. close": "126.1800",
      "5. volume": "23603789"
    },
    "2019-05-22": {
      "1. open": "126.6200",
      "2. high": "128.2400",
      "3. low": "126.5200",
      "4. close": "127.6700",
      "5. volume": "15396464"
    },
    "2019-05-21": {
      "1. open": "127.4300",
      "2. high": "127.5273",
      "3. low": "126.5800",
      "4. close": "126.9000",
      "5. volume": "15293239"
    },
    "2019-05-20": {
      "1. open": "126.5200",
      "2. high": "127.5894",
      "3. low": "125.7607",
      "4. close": "126.2200",
      "5. volume": "23706913"
    },
    "2019-05-17": {
      "1. open": "128.3050",
      "2. high": "130.4600",
      "3. low": "127.9200",
      "4. close": "128.0700",
      "5. volume": "25770518"
    },
    "2019-05-16": {
      "1. open": "126.7500",
      "2. high": "129.3800",
      "3. low": "126.4600",
      "4. close": "128.9300",
      "5. volume": "30112195"
    },
    "2019-05-15": {
      "1. open": "124.2600",
      "2. high": "126.7100",
      "3. low": "123.7000",
      "4. close": "126.0200",
      "5. volume": "24722687"
    },
    "2019-05-14": {
      "1. open": "123.8700",
      "2. high": "125.8800",
      "3. low": "123.7000",
      "4. close": "124.7300",
      "5. volume": "25266294"
    },
    "2019-05-13": {
      "1. open": "124.1100",
      "2. high": "125.5500",
      "3. low": "123.0400",
      "4. close": "123.3500",
      "5. volume": "33944902"
    },
    "2019-05-10": {
      "1. open": "124.9100",
      "2. high": "127.9300",
      "3. low": "123.8200",
      "4. close": "127.1300",
      "5. volume": "30915063"
    },
    "2019-05-09": {
      "1. open": "124.2900",
      "2. high": "125.7900",
      "3. low": "123.5700",
      "4. close": "125.5000",
      "5. volume": "27235814"
    },
    "2019-05-08": {
      "1. open": "125.4400",
      "2. high": "126.3700",
      "3. low": "124.7500",
      "4. close": "125.5100",
      "5. volume": "28418975"
    },
    "2019-05-07": {
      "1. open": "126.4600",
      "2. high": "127.1800",
      "3. low": "124.2200",
      "4. close": "125.5200",
      "5. volume": "36017640"
    },
    "2019-05-06": {
      "1. open": "126.3900",
      "2. high": "128.5600",
      "3. low": "126.1100",
      "4. close": "128.1500",
      "5. volume": "24239443"
    },
    "2019-05-03": {
      "1. open": "127.3600",
      "2. high": "129.4300",
      "3. low": "127.2500",
      "4. close": "128.9000",
      "5. volume": "24911105"
    },
    "2019-05-02": {
      "1. open": "127.9800",
      "2. high": "128.0000",
      "3. low": "125.5200",
      "4. close": "126.2100",
      "5. volume": "27350140"
    },
    "2019-05-01": {
      "1. open": "130.5300",
      "2. high": "130.6500",
      "3. low": "127.7000",
      "4. close": "127.8800",
      "5. volume": "26821671"
    },
    "2019-04-30": {
      "1. open": "129.8100",
      "2. high": "130.7000",
      "3. low": "129.3947",
      "4. close": "130.6000",
      "5. volume": "24166482"
    },
    "2019-04-29": {
      "1. open": "129.9000",
      "2. high": "130.1800",
      "3. low": "129.3500",
      "4. close": "129.7700",
      "5. volume": "16324162"
    },
    "2019-04-26": {
      "1. open": "129.7000",
      "2. high": "130.5152",
      "3. low": "129.0200",
      "4. close": "129.8900",
      "5. volume": "23654912"
    },
    "2019-04-25": {
      "1. open": "130.0600",
      "2. high": "131.3700",
      "3. low": "128.8300",
      "4. close": "129.1500",
      "5. volume": "38033871"
    },
    "2019-04-24": {
      "1. open": "125.7900",
      "2. high": "125.8500",
      "3. low": "124.5200",
      "4. close": "125.0100",
      "5. volume": "31256959"
    },
    "2019-04-23": {
      "1. open": "124.1000",
      "2. high": "125.5800",
      "3. low": "123.8300",
      "4. close": "125.4400",
      "5. volume": "24025500"
    },
    "2019-04-22": {
      "1. open": "122.6200",
      "2. high": "124.0000",
      "3. low": "122.5700",
      "4. close": "123.7600",
      "5. volume": "15648703"
    },
    "2019-04-18": {
      "1. open": "122.1900",
      "2. high": "123.5200",
      "3. low": "121.3018",
      "4. close": "123.3700",
      "5. volume": "27990977"
    },
    "2019-04-17": {
      "1. open": "121.2400",
      "2. high": "121.8500",
      "3. low": "120.5400",
      "4. close": "121.7700",
      "5. volume": "19300917"
    },
    "2019-04-16": {
      "1. open": "121.6400",
      "2. high": "121.6500",
      "3. low": "120.1000",
      "4. close": "120.7700",
      "5. volume": "14071766"
    },
    "2019-04-15": {
      "1. open": "120.9400",
      "2. high": "121.5800",
      "3. low": "120.5700",
      "4. close": "121.0500",
      "5. volume": "15792551"
    },
    "2019-04-12": {
      "1. open": "120.6400",
      "2. high": "120.9800",
      "3. low": "120.3700",
      "4. close": "120.9500",
      "5. volume": "19745122"
    },
    "2019-04-11": {
      "1. open": "120.5400",
      "2. high": "120.8500",
      "3. low": "119.9200",
      "4. close": "120.3300",
      "5. volume": "14209100"
    },
    "2019-04-10": {
      "1. open": "119.7600",
      "2. high": "120.3500",
      "3. low": "119.5400",
      "4. close": "120.1900",
      "5. volume": "16477148"
    },
    "2019-04-09": {
      "1. open": "118.6300",
      "2. high": "119.5400",
      "3. low": "118.5800",
      "4. close": "119.2800",
      "5. volume": "17611960"
    },
    "2019-04-08": {
      "1. open": "119.8100",
      "2. high": "120.0200",
      "3. low": "118.6400",
      "4. close": "119.9300",
      "5. volume": "15116165"
    },
    "2019-04-05": {
      "1. open": "119.3900",
      "2. high": "120.2300",
      "3. low": "119.3700",
      "4. close": "119.8900",
      "5. volume": "15826224"
    },
    "2019-04-04": {
      "1. open": "120.1000",
      "2. high": "120.2300",
      "3. low": "118.3800",
      "4. close": "119.3600",
      "5. volume": "20112827"
    },
    "2019-04-03": {
      "1. open": "119.8600",
      "2. high": "120.4300",
      "3. low": "119.1500",
      "4. close": "119.9700",
      "5. volume": "22860723"
    },
    "2019-04-02": {
      "1. open": "119.0600",
      "2. high": "119.4800",
      "3. low": "118.5200",
      "4. close": "119.1900",
      "5. volume": "18142276"
    },
    "2019-04-01": {
      "1. open": "118.9500",
      "2. high": "119.1085",
      "3. low": "118.1000",
      "4. close": "119.0200",
      "5. volume": "22789082"
    },
    "2019-03-29": {
      "1. open": "118.0700",
      "2. high": "118.3200",
      "3. low": "116.9600",
      "4. close": "117.9400",
      "5. volume": "25399731"
    },
    "2019-03-28": {
      "1. open": "117.4400",
      "2. high": "117.5800",
      "3. low": "116.1300",
      "4. close": "116.9300",
      "5. volume": "18334734"
    },
    "2019-03-27": {
      "1. open": "117.8750",
      "2. high": "118.2100",
      "3. low": "115.5215",
      "4. close": "116.7700",
      "5. volume": "22733406"
    },
    "2019-03-26": {
      "1. open": "118.6200",
      "2. high": "118.7050",
      "3. low": "116.8500",
      "4. close": "117.9100",
      "5. volume": "26097644"
    },
    "2019-03-25": {
      "1. open": "116.5600",
      "2. high": "118.0100",
      "3. low": "116.3224",
      "4. close": "117.6600",
      "5. volume": "27067096"
    },
    "2019-03-22": {
      "1. open": "119.5000",
      "2. high": "119.5900",
      "3. low": "117.0400",
      "4. close": "117.0500",
      "5. volume": "33624507"
    },
    "2019-03-21": {
      "1. open": "117.1350",
      "2. high": "120.8200",
      "3. low": "117.0900",
      "4. close": "120.2200",
      "5. volume": "29854425"
    },
    "2019-03-20": {
      "1. open": "117.3900",
      "2. high": "118.7500",
      "3. low": "116.7100",
      "4. close": "117.5200",
      "5. volume": "28113322"
    },
    "2019-03-19": {
      "1. open": "118.0900",
      "2. high": "118.4400",
      "3. low": "116.9900",
      "4. close": "117.6500",
      "5. volume": "37588676"
    },
    "2019-03-18": {
      "1. open": "116.1700",
      "2. high": "117.6100",
      "3. low": "116.0500",
      "4. close": "117.5700",
      "5. volume": "31207575"
    },
    "2019-03-15": {
      "1. open": "115.3400",
      "2. high": "117.2500",
      "3. low": "114.5900",
      "4. close": "115.9100",
      "5. volume": "54630640"
    },
    "2019-03-14": {
      "1. open": "114.5400",
      "2. high": "115.2000",
      "3. low": "114.3300",
      "4. close": "114.5900",
      "5. volume": "30763346"
    },
    "2019-03-13": {
      "1. open": "114.1300",
      "2. high": "115.0000",
      "3. low": "113.7800",
      "4. close": "114.5000",
      "5. volume": "35513750"
    }
  }
} as Response;
