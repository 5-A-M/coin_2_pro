import React, { useState } from "react";
import ArticleComponent from "../ArticleComponent/ArticleComponent";
import Liquidation from "../Liquidation/Liquidation";
import ListCoin from "../ListCoin/ListCoin";
import LongShortRatio from "../LongShortRatio/LongShortRatio";
import MenuFirst from "../MenuFirst/MenuFirst";
import TradeLive from "../TradeLive/TradeLive";
// import TradeView2 from "../Tradeview2/TradeView2";

const Wrap1 = (props) => {
  const [selectValue, setSelectValue] = useState(() => 1);
  return (
    <div className="fjskjlkasafdsdas" style={{ width: "35vw", height: "100%" }}>
      {parseInt(selectValue) === 1 && <LongShortRatio />}
      {/* {parseInt(selectValue) === 2 && <TradeLive />} */}
      {parseInt(selectValue) === 2 && <ListCoin />}
      {parseInt(selectValue) === 3 && <Liquidation />}
      {parseInt(selectValue) === 4 && <ArticleComponent />}
      {/* {
        parseInt(selectValue) !== 1 &&
        <div className="fkslsddadsasa" style={{width: "100%", height: "calc(100vh - 60px)"}}></div>
      } */}
      <MenuFirst
        selectValue={selectValue}
        setSelectValue={setSelectValue}
      ></MenuFirst>
    </div>
  );
};

export default Wrap1;
