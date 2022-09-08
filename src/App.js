import CenterComponent from "./Component/CenterComponent/CenterComponent";
import ChatBox from "./Component/ChatBox/ChatBox";
import Wrap1 from "./Component/Wrap1/Wrap1";
import WrapSocket from "./Component/WrapSocket/WrapSocket";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import __html from "./Component/NotFound/NotFound.html"
import React from "react";
// import NotFound from "./Component/NotFound/NotFound";
// var NotFoundPage = React.createClass({
//   render: function() {
//     return React.createElement("div", {dangerouslySetInnerHTML: {__html: __html}})
//   }
// })

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Wrapper />} />
        {/* <Route path="/maintain" element={<Wrapper />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

const Wrapper= (props)=> {
  return (
    <WrapSocket>
      <div id="piofrujikdjskd" className="gjlifrjueiredksj">
        <Wrap1></Wrap1>
        <CenterComponent></CenterComponent>
        <ChatBox></ChatBox>
      </div>
    </WrapSocket>
  )
}