import React from "react";
import HeaderConveyor from "./HeaderConveyor";
import Slide from "./Slide";
import TradingView from "./TradingView";

const  CenterComponent = (props) => {
  return (
    <div
      className="fjdfhsudhasujdaas"
      style={{
        width: "48vw",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <HeaderConveyor />
      <TradingView />
      <Slide />
    </div>
  );
};

export default CenterComponent;
