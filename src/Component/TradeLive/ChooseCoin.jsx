import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { memo } from "react";
import { useMemo } from "react";

const ChooseCoin = (props) => {
  const arrayListCoin = useMemo(
    () => [
      { symbol: "BTC" },
      { symbol: "ETH" },
      { symbol: "BNB" },
      { symbol: "SOL" },
      { symbol: "ADA" },
      { symbol: "XRP" },
      { symbol: "DOT" },
      { symbol: "DOGE" },
      { symbol: "SHIB" },
    ],
    []
  );
  const [open, setOpen] = useState(() => false);
  const [defaultCoin, setDefaultCoin] = useState(() => "BTC");
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", clickoutside);
    return () => document.removeEventListener("mousedown", clickoutside);
  }, []);
  const clickoutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setOpen(() => false);
    }
  };
  return (
    <div
      ref={ref}
      className="djklahjksjaksasa"
      style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}
    >
      <div
        className="sjkklksldkslsask"
        style={{
          padding: "0 16px",
          height: 38,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f2f0f5",
          cursor: "pointer",
        }}
      >
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="sjkldjaskljassa"
          style={{
            width: "100%",
            height: "100%",
            textTransform: "uppercase",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {defaultCoin}/usd
        </div>
        {open === true && (
          <div
            className="dsijaskasjsaassa"
            style={{
              width: "100%",
              position: "absolute",
              top: "100%",
              background: "#f2f0f5",
              zIndex: 10,
            }}
          >
            {arrayListCoin?.map((item, key) => (
              <div
                onClick={() => {
                  props.setSymbol(() => item.symbol);
                  setOpen(() => false);
                  setDefaultCoin(() => item.symbol);
                }}
                key={key}
                className="fsjklesjklradasda"
                style={{
                  padding: 16,
                  height: 38,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.symbol}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ChooseCoin);
