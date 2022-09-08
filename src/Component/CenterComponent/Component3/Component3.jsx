import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Component3 = (props) => {
  return (
    <div className="fjklssdjksajskfaasda" style={{width: "100%", height: "calc(40vh - 35px)"}}>
      <TradingViewWidget
        symbol={"BINANCE:BTCUSDT"}
        theme={Themes.DARK}
        locale="ko"
        autosize
      />
    </div>
  );
};

export default Component3;
