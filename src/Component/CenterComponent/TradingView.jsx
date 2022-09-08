import React from "react";
import { memo } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Loading from "../Loading/Loading";

const TradingView = (props) => {
  return (
    <div
      className="oijhdjlzkfjklsIDjklsd"
      style={{ width: "100%", height: "55%", position: "relative", display: "flex", justifyContent: 'center', alignItems: "center"}}
    >
      <TradingViewWidget
        symbol={"BINANCE:BTCUSDT"}
        theme={Themes.DARK}
        locale="ko"
        autosize
       />
      <div className="sklsaklsasewas" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: -1}}>
        <Loading />
      </div>
    </div>
  );
};

export default memo(TradingView);
