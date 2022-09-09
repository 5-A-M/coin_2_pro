import React from "react";
import { Helmet } from "react-helmet-async";
import "./Component2.sass"

const Component2 = (props) => {
  return (
    <div
      className="gjkdfkjdlflsdas"
      style={{ width: "100%", height: "calc(40vh - 35px)" }}
    >
      <Helmet>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/google_analytics.js"
        ></script>
        <script type="text/javascript" src="https://res.cloudinary.com/cockbook/raw/upload/v1662524257/single/c_qhofsy.js"></script>
        <script
          type="text/javascript"
          src="https://js.pusher.com/4.4/pusher.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/bignumber.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/jsframe.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/pako.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/inago_sound_setting.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/inago_sound.1.4.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/inago_bar_chart_setting.0.1.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/inago_bar_chart.0.5.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/futures_date_map.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_btc.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_eth.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_xrp.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_bch.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_ltc.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/marketBoardData_bnb.js"
          defer
        ></script>
        <script
          type="text/javascript"
          src="https://inagoflyer.appspot.com/js/cmac.0.2.js"
          defer
        ></script>
      </Helmet>
      <div className="wrapper" style={{height: "100%"}}>
        <div className="container" style={{height: "100%", padding: "5px 0px 0px 0px"}}>
          <TitleContainer title={"5 second volume chart"} />
          <div className="contents" style={{height: "calc(100% - 30px)", display: "flex", justifyContent: "center", gap: 16}}>
            <div className="wrapper-chart-model" style={{width: "100%", height: "100%"}}>
              <WrapperSymbol img={"https://cdn.coinglasscdn.com/static/coins/btc@2x.png"} symbolName={"BTC"} />
              <div className="sfhjkahjskahsasas" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", position: "relative", height: "calc(100% - 28px)"}}>
                <ShowChart className={"chart_model"} id="inago_chart_btc" />
              </div>
            </div>
            <div className="wrapper-chart-model" style={{width: "100%", height: "100%"}}>
              <WrapperSymbol img={"https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png"} symbolName={"ETH"} />
              <div className="sfhjkahjskahsasas" style={{width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", position: "relative", height: "calc(100% - 28px)"}}>
                <ShowChart className={"chart_model"} id="inago_chart_eth" />
              </div>
            </div>
            <HideChart id={"inago_chart_xrp"} className={"afjkfjakdsas fsdjkldashdjlk"} />
            <HideChart id={"inago_chart_bch"} className={"afjkfjakdsas fsdjkldashdjlk"} />
            <HideChart id={"inago_chart_ltc"} className={"afjkfjakdsas fsdjkldashdjlk"} />
            <HideChart id={"inago_chart_bnb"} className={"afjkfjakdsas fsdjkldashdjlk"} />
            <div id="inago_bar_chart_setting" style={{ display: "none" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HideChart= (props)=> {
  return (
    <div id={props.id} className={props.className} style={{display: "none"}}></div>
  )
}

const ShowChart= (props)=> {
  return (
    <div id={props.id} className={props.className} style={{}}></div>
  )
}

const TitleContainer= (props)=> {
  return (
    <div className="title-container-ja" style={{fontSize: 18, fontWeight: 600, height: 28, display: "flex", alignItems: "center", color: "#fff"}}>
      {props.title}
    </div>
  )
}

const WrapperSymbol= (props)=> {
  return (
    <div className="wrapper-symbol" style={{ fontWeight: 600, height: 28, display: "flex", alignItems: "center", gap: 10}}>
      <img className="wrapper-symbol-img" src={props.img} alt="" style={{width: 24, height: 24, objectFit: "cover"}} />
      <span className="wrapper-symbol-span" style={{fontSize: 20}}>{props.symbolName}</span>
    </div>
  )
}

export default Component2;
