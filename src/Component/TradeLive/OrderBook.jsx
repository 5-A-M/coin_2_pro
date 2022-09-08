import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DetailLineCoin from "./DetailLineCoin";
import moment from 'moment'
import _ from "lodash";

const OrderBook = (props) => {
  const [total, setTotal] = useState(() => []);
  useEffect(() => {
    props?.data?.asks
      ?.slice(parseInt(props?.startIndex), parseInt(props?.endIndex))
      ?.map((item) => setTotal((prev) => [...prev, parseFloat(item[1])]));
    return () => setTotal(() => []);
  }, [props?.data?.asks, props?.startIndex, props?.endIndex]);

  return (
    <div className="dsjkdkalsdasasa" style={{ width: "100%" }}>
      {
        <table className="dsjsakslksasa" style={{ width: "100%" }}>
          <thead>
            <tr className="suhgeuihnasasassa">
              <td style={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}>
                Price
              </td>
              <td style={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}>
                Size ({props.symbol})
              </td>
              {props.is_add_total === true && (
                <td
                  style={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}
                >
                  Total
                </td>
              )}
              {props.is_add_time === true && (
                <td
                  style={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}
                >
                  Time
                </td>
              )}
              <td style={{ fontSize: 14, fontWeight: 600, textAlign: "right" }}>
                Exchange
              </td>
            </tr>
          </thead>
          <tbody>
            {props?.data &&
              props?.data?.bids
                ?.slice(parseInt(props.startIndex), parseInt(props.endIndex))
                ?.filter(item=> parseFloat(item[1]) >= parseFloat(props.sizeFilter))
                ?.map((item, key) => (
                  <DetailLineCoin
                    total={_.sum(total?.slice(0, parseInt(key) + 1))}
                    is_add_total={props.is_add_total}
                    is_add_time={props.is_add_time}
                    key={key}
                    color={props.color}
                    price={item[0]}
                    deviant={item[1]}
                    e={props.data.E}
                    t={props.data.T}
                    time={moment(new Date()).format("HH:mm:ss")}
                    dataExchange={props.dataExchange}

                    // width={}
                  ></DetailLineCoin>

                ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default OrderBook;
