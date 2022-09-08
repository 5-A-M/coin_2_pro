import React, { Fragment, memo, useEffect, useMemo, useRef, useState } from "react";
import ComponentDetailElementList from "./ComponentDetailElementList";
import _ from "lodash";
import Fuse from "fuse.js";
// import lunr from "lunr"

const MainList = (props) => {
  const options = useMemo(() => ({ keys: ["symbol_name", "qc_key"] }), []);
  const fuse= useMemo(()=> new Fuse(props?.data, options), [props?.data, options])
  //   const idx= lunr(function() {
  //     this.ref("project_id")
  //     this.field("name")
  //     props?.data?.forEach(function(doc) {
  //         this.add(doc)
  //     }, this)
  //   })
  const [changePrice, setChangePrice] = useState(() => {});
  const [changeTrend, setChangeTrend] = useState(() => {});
  const [indicator, setIndicator] = useState(() => {});
  // 

  // change price
  useEffect(() => {
    
    const events = new EventSource(
      "https://eventstream.quantifycrypto.com/price-broadcast"
    );
    const events1 = new EventSource(
      "https://eventstream.quantifycrypto.com/indicator-broadcast?indicator=TREND&trend_values=qma_score"
    );
    const events2 = new EventSource(
      "https://eventstream.quantifycrypto.com/indicator-broadcast?indicator=TREND,RSI,MACD&rsi_values=rsi5min,rsi15min,rsi30min,rsi1h,rsi2h,rsi4h,rsi24h&macd_values=macd_5min,mcad_15min,macd_30min,macd_1h,macd_2h,macd_4h,macd_24h"
    );
    events.onmessage = (e) => {
      setChangePrice(() => JSON.parse(e.data));
    };
    events1.onmessage = (e) => {
      setChangeTrend(() => JSON.parse(e.data).value);
    };
    events2.onmessage = (e) => {
      setIndicator(() => JSON.parse(e.data).value);
    };
  }, []);
  return (
    <tbody className="kfopkjedowekaswa">
      {props?.search?.length <= 0 && (
        <>
          {props.sort === undefined && (
            <Fragment>
              {props.data &&
                props?.data
                  ?.slice(parseInt(props.start), parseInt(props.end))
                  ?.map((item, key) => (
                    <Wrapper
                      index={parseInt(key)}
                      changePrice={changePrice}
                      changeTrend={changeTrend}
                      indicator={indicator}
                      key={key}
                      {...item}
                    ></Wrapper>
                  ))}
            </Fragment>
          )}
          {/*  */}
          {props.sort !== undefined &&
            props.data &&
            _.orderBy(props.data, [props.sort.name], [props.sort.orderBy])
              ?.slice(parseInt(props.start), parseInt(props.end))
              ?.map((item, key) => (
                <Wrapper
                  index={parseInt(key)}
                  changePrice={changePrice}
                  changeTrend={changeTrend}
                  indicator={indicator}
                  key={key}
                  {...item}
                ></Wrapper>
              ))}
        </>
      )}
      <>
        {props?.search?.length > 0 &&
          
          fuse.search(props.search)
            ?.slice(parseInt(props.start), parseInt(props.end))
            ?.map((item, key) => (
              <Wrapper
                index={parseInt(key)}
                changePrice={changePrice}
                changeTrend={changeTrend}
                indicator={indicator}
                key={key}
                {...item.item}
              ></Wrapper>
            ))
            }
      </>
    </tbody>
  );
};

export default memo(MainList);

//
const Wrapper = memo((props) => {
  return (
    <tr className="fjieporjpsdasa">
      <ComponentDetailElementList
        index={props.index}
        {...props}
      ></ComponentDetailElementList>
    </tr>
  );
});
