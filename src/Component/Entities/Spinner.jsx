import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = (props) => {
  return <ClipLoader loading={true} cssOverride={override} size={100} color={"#fff"} />;
};

export default Spinner;
