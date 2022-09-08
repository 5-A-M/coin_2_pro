import React, { memo } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Pagination = memo((props) => {
  return (
    <div
      className="dhajskahsjkashjkadsadas"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: 50,
        gap: 10,
      }}
    >
      <Metrics {...props} />
      <NavigatePage {...props} />
    </div>
  );
});

export default Pagination;

const Metrics = (props) => {
  return (
    <div className="djklsajskalsasa" style={{ color: "#fff", fontSize: 13 }}>
      <strong style={{ color: "#fff", fontSize: 13 }}>{props.start}</strong> to{" "}
      <strong style={{ color: "#fff", fontSize: 13 }}>{props.end}</strong> of{" "}
      <strong style={{ color: "#fff", fontSize: 13 }}>{props.sum}</strong>
    </div>
  );
};

const NavigatePage = (props) => {
  const ascending= ()=> {
    if(props.start >=50) {
      props.setPaginate((prev) => ({
        ...prev,
        start: parseInt(props.start) - 50,
        end: parseInt(props.end) - 50,
      }))
    }
  }
  const descending= ()=> {
    if(props.end <= props.sum - 50) {
      props.setPaginate((prev) => ({
        ...prev,
        start: parseInt(props.start) + 50,
        end: parseInt(props.end) + 50,
      }))
    }
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div
        onClick={() => ascending()}
        className="dajsajklasjkaldsda"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowLeftIcon style={{ color: "#fff" }} />
      </div>
      <div className="djklsajskalsasa" style={{ color: "#fff", fontSize: 13 }}>
        Page{" "}
        <strong style={{ color: "#fff", fontSize: 13 }}>
          {props.end / 50}
        </strong>{" "}
        of{" "}
        <strong style={{ color: "#fff", fontSize: 13 }}>
          {props.sum / 50}
        </strong>
      </div>
      <div
        onClick={() => descending()}
        className="dajsajklasjkaldsda"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <KeyboardArrowRightIcon style={{ color: "#fff" }} />
      </div>
    </div>
  );
};
