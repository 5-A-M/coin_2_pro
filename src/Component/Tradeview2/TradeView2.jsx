import React from "react";

const TradeView2 = (props) => {
  return (
    <div
      className="dakldjapjaiwaw"
      style={{
        width: "100%",
        height: "calc(100vh - 60px)",
        padding: 16,
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <iframe
        id="iframe-id"
        title={"coin-real-time"}
        src="https://coinlobster.com/index.html"
        style={{ width: "100%", height: "100%", border: "none" }}
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default TradeView2;
