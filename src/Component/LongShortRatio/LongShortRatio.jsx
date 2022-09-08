import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Chart from "./Chart";
import Option from "./Option";
import Title from "./Title";

const LongShortRatio = (props) => {
  const [listSymbol, setListSymbol] = useState(() => []);
  const [data, setData] = useState(() => []);
  const [symbol, setSymBol] = useState(() => "BTC");
  const [timeType, setTimeType] = useState(() => ({
    time: 5,
    timeType: 3,
    isHour: false,
  }));
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/support/symbol`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setListSymbol(() => result.data);
    })();
    return () => setListSymbol(() => []);
  }, []);
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/futures/longShortRate?symbol=${symbol}&timeType=${parseInt(
          timeType.timeType
        )}`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result.data[0]);
    })();
  }, [timeType, symbol]);
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const res = await axios({
        url: `https://fapi.coinglass.com/api/futures/longShortRate?symbol=${symbol}&timeType=${parseInt(
          timeType.timeType
        )}`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result.data[0]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data, timeType, symbol]);
  if (data?.length <= 0) {
    return <div style={{height: "calc(100vh - 60px)"}}><Loading /></div>
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 60px)",
          padding: 16,
          overflow: "auto",
        }}
      >
        <Title {...data}></Title>
        <Option
          listSymbol={listSymbol}
          symbol={symbol}
          timeType={timeType}
          setSymBol={setSymBol}
          setTimeType={setTimeType}
          {...data}
        ></Option>
        <br />
        <Chart {...data}></Chart>
      </div>
    );
  }
};

export default LongShortRatio;
