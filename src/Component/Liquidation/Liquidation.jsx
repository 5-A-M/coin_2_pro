import axios from "axios";
import React, { useEffect, useState } from "react";
import { memo } from "react";
import { SERVER_URL } from "../config/config";
import ScrollToBottom from "react-scroll-to-bottom";
import { usePrevious2 } from "../CustomHook/usePrevious";
import "./Liquidation.sass";
import TableLiquidation from "./TableLiquidation";
import FilterPrice from "./FilterPrice";
import Loading from "../Loading/Loading";

const Liquidation = (props) => {
  const [data, setData] = useState(() => []);
  const dataPrevious = usePrevious2(data);
  const [filterPrice, setFilterPrice] = useState(() => 0);
  
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/get/liquidation`,
        method: "GET",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [data]);
  if (data.length > 0) {
    return (
      <ScrollToBottom mode="top" checkInterval={0}>
        <div
          className="dsjaklakjslassasa"
          style={{
            width: "100%",
            height: "calc(100vh - 60px)",
            padding: 16,
          }}
        >
          <FilterPrice setFilterPrice={setFilterPrice} />
          <TableLiquidation
            filterPrice={filterPrice}
            data={data}
            dataPrevious={dataPrevious}
          />
        </div>
      </ScrollToBottom>
    );
  } else {
    return <div style={{height: "calc(100vh - 60px)"}}><Loading /></div>
  }
};

export default memo(Liquidation);
