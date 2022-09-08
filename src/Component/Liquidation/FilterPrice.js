import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NumberFormat from 'react-number-format';

const FilterPrice = (props) => {
  const [defaultValue, setDefaultValue] = useState(() => ({text: "Amount", value: 0, amount: "Amount"}));
  const [openList, setOpenList] = useState(() => false);
  const ref = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", clickOutSide);
    return () => document.removeEventListener("mousedown", clickOutSide);
  }, []);
  const clickOutSide = (e) => {
    if (ref?.current && !ref?.current?.contains(e.target)) {
      setOpenList(() => false);
    }
  };
  return (
    <div ref={ref} className="jfskrjipejasasa" style={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f2f0f5", padding: "5px 0"}}>
      <div className="jkldjhsiojfafsd" style={{fontSize: 18, fontWeight: 600}}>BTC, ETH liquidation history</div>
      <div
        className="djkdajkdfueoirj"
        style={{
          position: "relative",
          height: 32,
          padding: "0 16px",
          borderRadius: 10,
          background: "#000",
          cursor: "pointer",
          width: 120,
          userSelect: "none"
        }}
      >
        <div
          onClick={() => setOpenList((prev) => !prev)}
          style={{
            fontSize: 16,
            display: "flex",
            alignItems: "center",
            width: "120%",
            height: "100%",
            justifyContent: "space-between",
            padding: "0 8px",
            
          }}
        >
          <p style={{fontSize: 16, color: "#fff", fontWeight: 600, textTransform: "capitalize"}}>{defaultValue.amount}</p>
          <div className="dsjdkljkasaowawra" style={{display: "flex", justifyContent: 'center', alignItems: "center"}}><KeyboardArrowDownIcon style={{color: "#fff"}}></KeyboardArrowDownIcon></div>
        </div>
        {openList === true && (
          <ListFilterPrice
            setFilterPrice={props?.setFilterPrice}
            setOpenList={setOpenList}
            setDefaultValue={setDefaultValue}
          />
        )}
      </div>
    </div>
  );
};

const ListFilterPrice = (props) => {
  const array_list_price = [{text: "all", value: 0, separator: "all"}, {text: 1000, value: 1000, separator: <NumberFormat prefix="$ " thousandSeparator={true} value={1000} displayType="text" />}, {text: 10000, value: 10000, separator: <NumberFormat prefix="$ " thousandSeparator={true} value={10000} displayType="text" />}, {text: 20000, value: 20000, separator: <NumberFormat prefix="$ " thousandSeparator={true} value={20000} displayType="text" />}];
  return (
    <div
      className="fvjifjioeujaeowias"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "#f2f0f5",
        borderRadius: 5,
        zIndex: 20,
        userSelect: "none",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
    >
      {array_list_price?.map((item, key) => (
        <div
          key={key}
          onClick={() => {
            props.setDefaultValue(() => ({text: item.value, value: parseInt(item.value), amount: item.separator}));
            props?.setOpenList(() => false);
            props?.setFilterPrice(() => parseInt(item.value));
          }}
          style={{ width: "100%", height: 40, padding: "0 16px", textTransform: "capitalize", fontWeight: 600, display: "flex", alignItems: "center"}}
        >
          {item.separator}
        </div>
      ))}
    </div>
  );
};

export default FilterPrice;
