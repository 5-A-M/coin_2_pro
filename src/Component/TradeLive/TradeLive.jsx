import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./style.sass"
// import Category from "./Category";
// import BreakLine from "../Entities/BreakLine";
// import OrderBook from "./OrderBook";
// import ChooseCoin from "./ChooseCoin";
// import Spinner from "../Entities/Spinner";
// import SizeFilter from "./SizeFilter";
import { SERVER_URL } from "../config/config";
// import _ from "lodash"
import THead from "../Liquidation/THead";
import TBody from "./TBody";
import Loading from "../Loading/Loading";

const TradeLive = (props) => {
  const array_thead= ["Boardname", "Takerside", "Volume", "Price", "Time"]
  // eslint-disable-next-line
  const [symbol, setSymbol] = useState(() => "BTC");
  // eslint-disable-next-line
  const [data, setData] = useState(() => []);
  // eslint-disable-next-line
  const [data2, setData2] = useState(() => []);
  // eslint-disable-next-line
  const [data3, setData3] = useState(() => []);
    // eslint-disable-next-line
  const [sizeFilter, setSizeFilter]= useState(()=> 0)
  useEffect(() => {
    (async()=> {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/coin/get`,
        headers: {
          'Access-Control-Allow-Origin': "*",
          'Content-Type': 'application/json'
        },
        method: "GET",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result);
    })()

    return () => setData(()=> [])
  }, []);
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/coin/get`,
        headers: {
          'Access-Control-Allow-Origin': "*"
        },
        method: "GET",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  if(data.length > 0) {

    return (
      <Fragment>
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 60px)",
            padding: 16,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/* <Spinner /> */}
          {/* <iframe frameBorder="0" scrolling="no" src="https://inagoflyer.appspot.com/btcmacwidget?width=100&widthUnit=per&height=240&heightUnit=px&columnCount=18&soundVolume=0.5&okexStatus=0" style={{width: "100%", height: 240}} title="Hihi"></iframe> */}
          <table className="fhdjkehaukshajklwhasw" style={{width: "100%"}}>
            <THead array_thead={array_thead} {...props} />
            <TBody data={data} {...props} />
          </table>
        </div>
      </Fragment>
    );
  }
  else {
    return (
      <div style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        padding: 16,
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Loading /> 
      </div>
    )
  }
};

export default TradeLive;
