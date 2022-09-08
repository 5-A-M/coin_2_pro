import React from "react";
import { useEffect } from "react";
// import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import Component3 from "./Component3/Component3";
import Component4 from "./Component4/Component4";
import Component5 from "./Component5/Component5";
import { useInView } from 'react-intersection-observer';


const Slide = (props) => {
  const {ref, inView}= useInView({
    threshold: 0
  })
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://res.cloudinary.com/cockbook/raw/upload/v1662610165/single/a_niuixb.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div
      className="jdifgpjfrklsjdksdjasd"
      style={{
        width: "100%",
        height: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="slider-pro" id="slide">
        <div className="sp-slides">
          {/* <div className="sp-slide" style={{height: "calc(100% - 35px)", width: "100%"}}>
            <Component1 />
          </div> */}
          <div className="sp-slide" style={{height: "calc(100% - 35px)"}}>
            <Component2 />
          </div>
          <div className="sp-slide" style={{height: "calc(100% - 35px)"}}>
            <Component3 />
          </div>
          <div className="sp-slide" style={{height: "calc(100% - 35px)"}}>
            <Component4 />
          </div>
          <div ref={ref} className="sp-slide" style={{height: "calc(100% - 35px)"}}>
            {inView=== true && <Component5 />}
          </div>
        </div>
        <div className="sp-thumbnails" style={{position: "relative", zIndex: 5, background: "#fff"}}>
          <div className="sp-thumbnail">btn1 </div>
          <div className="sp-thumbnail">btn2 </div>
          <div className="sp-thumbnail">btn3 </div>
          <div className="sp-thumbnail">btn4 </div>
          {/* <div className="sp-thumbnail">btn5 </div> */}
        </div>
      </div>
    </div>
  );
};

export default Slide;
