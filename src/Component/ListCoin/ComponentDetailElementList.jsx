import React, { Fragment, memo, useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import _ from "lodash";
import usePrevious from "../CustomHook/usePrevious";
var a = {};
var a1 = {};
var a2 = {};
const events = new EventSource(
  "https://eventstream.quantifycrypto.com/price-broadcast"
);
const events1 = new EventSource(
  "https://eventstream.quantifycrypto.com/indicator-broadcast?indicator=TREND&trend_values=support1h"
);
const events2 = new EventSource(
  "https://eventstream.quantifycrypto.com/indicator-broadcast?indicator=TREND&trend_values=resistance1h"
);
events.onmessage = (e) => {
  a = JSON.parse(e.data);
};
events1.onmessage = (e) => {
  a1 = JSON.parse(e.data);
};
events2.onmessage = (e) => {
  a2 = JSON.parse(e.data);
};

const ComponentDetailElementList = (props) => {
  return <Wrapper2 index={props.index} {...props}></Wrapper2>;
};

export const Rank = (props) => {
  return (
    <div style={{ color: "#fff", width: 20, fontSize: 13, fontWeight: 600 }}>
      {props.rank}
    </div>
  );
};

export const Logo = (props) => {
  return (
    <span
      className="fjdaklisfjlkassdasajiorejas fyjreghwujehushajkssas"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 24,
        height: 24,
        marginRight: 8,
      }}
    >
      <img
        src={
          "https://quantifycrypto.s3-us-west-2.amazonaws.com/pictures/crypto-img/32/icon/" +
          props?.qc_key?.toLowerCase().trim() +
          ".png"
        }
        alt="open"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
    </span>
  );
};

const Support = memo((props) => {
  // eslint-disable-next-line
  const [support1h, setSupport1h] = useState(() => props.support1h);
  const previousValue = usePrevious(support1h);
  const ref = useRef();
  useEffect(() => {
    setSupport1h(() => props.support1h);
  }, [props.support1h]);
  useEffect(() => {
    (async () => {
      if (
        props?.qc_key?.trim()?.toLowerCase() ===
        a1.value.qc_key?.trim()?.toLowerCase()
      ) {
        setSupport1h(() => a1.value.value);
        ref.current.style.background = "rgba(22, 160, 133, 0.5)";
      } else {
        ref.current.style.background = "transparent";
      }
    })();
  }, [props?.qc_key]);
  return (
    <td
      className={`dsyewuihejskehuiesd assajkshaksasasa kjdawoljskalssa fskdhkdshijashjaiosa fyjreghwujehushajkssas`}
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 600,
        position: "relative",
        height: "100%",
        display: "flex",
        color: "rgb(255, 152, 0)",
        width: "20%",
        maxWidth: "20%",
        whiteSpace: "nowrap",
      }}
    >
      {a1?.value?.qc_key?.trim()?.toLowerCase() === props?.qc_key?.trim()?.toLowerCase() ? (
        <>
          {parseInt(a1?.value?.value) > 100 && (
            <NumberFormat
              prefix="$ "
              renderText={(value, props) => (
                <div
                  className="fjkldjsakldjaklssa"
                  style={{
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {value}
                </div>
              )}
              decimalSeparator="."
              displayType={"text"}
              thousandSeparator={true}
              value={a1.value.value.toFixed(2)}
            />
          )}
          {(parseInt(a1.value.value) <= 100 && parseFloat(a1.value.value)) >=
            0.001 && "$ " + parseFloat(a1.value.value).toFixed(4)}
          {parseFloat(a1.value.value) < 0.001 &&
            "$ " + parseFloat(a1.value.value).toFixed(6)}
        </>
      ) : (
        <>
          {parseInt(support1h) > 100 && (
            <NumberFormat
              prefix="$ "
              renderText={(value, props) => (
                <div
                  className="fjkldjsakldjaklssa"
                  style={{
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {value}
                </div>
              )}
              decimalSeparator="."
              displayType={"text"}
              thousandSeparator={true}
              value={support1h.toFixed(2)}
            />
          )}
          {(parseInt(support1h) <= 100 && parseFloat(support1h)) >= 0.001 &&
            "$ " + parseFloat(support1h).toFixed(4)}
          {parseFloat(support1h) < 0.001 &&
            "$ " + parseFloat(support1h).toFixed(6)}
        </>
      )}
      {previousValue !== support1h && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "all .5s linear",
            background: "rgba(22, 160, 133, 0.5)",
            zIndex: 10,
          }}
        ></p>
      )}
      <p
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "all .5s linear",
          zIndex: 10,
        }}
      ></p>
    </td>
  );
});

const Resistance = (props) => {
  // eslint-disable-next-line
  const [resistance1h, setResistance1h] = useState(() => props.resistance1h);
  const previouseValue = usePrevious(resistance1h);
  const ref = useRef();
  useEffect(() => {
    setResistance1h(() => props.resistance1h);
  }, [props.resistance1h]);
  useEffect(() => {
    if (
      props?.qc_key?.trim()?.toLowerCase() ===
      a2.value.qc_key?.trim()?.toLowerCase()
    ) {
      setResistance1h(() => a2.value.value);
      ref.current.style.background = "rgba(22, 160, 133, 0.5)";
    } else {
      ref.current.style.background = "transparent";
    }
  }, [props]);
  return (
    <td
      className={`rhiuehgdkjuhrkuehsa assajkshaksasasa kjdawoljskalssa fskdhkdshijashjaiosa fyjreghwujehushajkssas`}
      style={{
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 600,
        width: "20%",
        maxWidth: "20%",
        display: "flex",
        position: "relative",
        height: "100%"
      }}
    >
      {a2.value.qc_key?.trim()?.toLowerCase() ===
      props.qc_key?.trim()?.toLowerCase() ? (
        <>
          {parseInt(a2.value.value) > 100 && (
            <NumberFormat
              prefix="$ "
              renderText={(value, props) => (
                <div
                  className="fjkldjsakldjaklssa"
                  style={{
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {value}
                </div>
              )}
              decimalSeparator="."
              displayType={"text"}
              thousandSeparator={true}
              value={a2.value.value.toFixed(2)}
            />
          )}
          {(parseInt(a2.value.value) <= 100 && parseFloat(a2.value.value)) >=
            0.001 && "$ " + parseFloat(a2.value.value).toFixed(4)}
          {parseFloat(a2.value.value) < 0.001 &&
            "$ " + parseFloat(a2.value.value).toFixed(6)}
        </>
      ) : (
        <>
          {parseInt(resistance1h) > 100 && (
            <NumberFormat
              prefix="$ "
              renderText={(value, props) => (
                <div
                  className="fjkldjsakldjaklssa"
                  style={{
                    fontSize: 14,
                    whiteSpace: "nowrap",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  {value}
                </div>
              )}
              decimalSeparator="."
              displayType={"text"}
              thousandSeparator={true}
              value={resistance1h.toFixed(2)}
            />
          )}
          {(parseInt(resistance1h) <= 100 && parseFloat(resistance1h)) >=
            0.001 && "$ " + parseFloat(resistance1h).toFixed(4)}
          {parseFloat(resistance1h) < 0.001 &&
            "$ " + parseFloat(resistance1h).toFixed(6)}
        </>
      )}
      {
        previouseValue !== resistance1h && 
        <p
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "all .5s linear",
          background: "rgba(22, 160, 133, 0.5)"
        }}
      ></p>
        
      }
      <p
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "all .5s linear",
        }}
      ></p>
    </td>
  );
};
const Wrapper2 = (props) => {
  return (
    <Fragment>
      <SymbolName {...props} />
      <Price index={props.index} {...props} />
      <DP {...props} />
      <Support {...props} />
      <Resistance {...props} />
    </Fragment>
  );
};

const Price = (props) => {
  // const fakesleep = (ms) => new Promise((rel) => setTimeout(rel, ms));
  const ref = useRef();
  const [price, setPrice] = useState(() => props.price_usd);
  const previousValue = usePrevious(price);
  useEffect(() => {
    setPrice(() => props.price_usd);
  }, [props.price_usd]);
  useEffect(() => {
    (async () => {
      if (
        props?.qc_key?.trim()?.toLowerCase() === a.qc_key?.trim()?.toLowerCase()
      ) {
        setPrice(() => a.price_usd);
        ref.current.style.background = "rgba(22, 160, 133, 0.5)";
      } else {
        ref.current.style.background = "transparent";
      }
    })();
  });

  return (
    <td
      className="fksledjkijfsaaaedikdsaassdwqa fyjreghwujehushajkssas duwydkjhakdhjksfdsasasa"
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        fontWeight: 600,
        position: "relative",
        height: "100%",
        width: "20%",
        maxWidth: "20%",
      }}
    >
      <div
        style={{
          fontSize: 14,
          whiteSpace: "nowrap",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {a.qc_key === props.qc_key ? (
          <>
            {parseInt(a.price_usd) > 100 && (
              <NumberFormat
                prefix="$ "
                renderText={(value, props) => (
                  <div
                    style={{
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {value}
                  </div>
                )}
                decimalSeparator="."
                displayType={"text"}
                thousandSeparator={true}
                value={a.price_usd.toFixed(2)}
              />
            )}
            {(parseInt(a.price_usd) <= 100 && parseFloat(a.price_usd)) >=
              0.001 && "$ " + parseFloat(a.price_usd).toFixed(4)}
            {parseFloat(a.price_usd) < 0.001 &&
              "$ " + parseFloat(a.price_usd).toFixed(6)}
          </>
        ) : (
          <>
            {parseInt(price) > 100 && (
              <NumberFormat
                prefix="$ "
                renderText={(value, props) => (
                  <div
                    style={{
                      fontSize: 14,
                      whiteSpace: "nowrap",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    {value}
                  </div>
                )}
                decimalSeparator="."
                displayType={"text"}
                thousandSeparator={true}
                value={price.toFixed(2)}
              />
            )}
            {(parseInt(price) <= 100 && parseFloat(price)) >= 0.001 &&
              "$ " + parseFloat(price).toFixed(4)}
            {parseFloat(price) < 0.001 && "$ " + parseFloat(price).toFixed(6)}
          </>
        )}
      </div>
      {price !== previousValue && (
        <p
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            transition: "all 1s linear",
            zIndex: 10,
            background: "rgba(22, 160, 133, 0.5)",
          }}
        ></p>
      )}
      <p
        ref={ref}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transition: "all 1s linear",
          zIndex: 10,
        }}
      ></p>
    </td>
  );
};

const SymbolName = memo((props) => {
  return (
    <td
      className={`assajkshaksasasa fyjreghwujehushajkssas dsosjhdilasjalksw`}
      style={{
        alignItems: "center",
        fontSize: 14,
        fontWeight: 600,
        width: "20%",
        maxWidth: "20%",
        display: "flex",
      }}
    >
      <Logo {...props} />
      {props.qc_key}
    </td>
  );
});

const DP = memo((props) => {
  // day percent
  // eslint-disable-next-line
  const [price24h, setPrice24h] = useState(() => props.price24h);
  useEffect(() => {
    setPrice24h(() => props.price24h);
  }, [props.price24h]);
  return (
    <td
      className={`assajkshaksasasan fyjreghwujehushajkssas fdshjkjdhsjkdhsjkawwsa ${
        parseFloat(price24h) <= 0 ? "dawyuawhauksgfsere" : ""
      } ${parseFloat(price24h) > 0 ? "dhgsjdhgajakssaas" : ""}`}
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 600,
        width: "20%",
        maxWidth: "20%",
        display: "flex",
      }}
    >
      {_.round(parseFloat(price24h) * 100, 2)}%
    </td>
  );
});

export default ComponentDetailElementList;
