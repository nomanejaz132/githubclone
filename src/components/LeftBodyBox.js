import React from "react";
import Moiz from "./images/img.jpeg";
import "./style/LeftBodyBox.css";
import Clock from "./images/clock.svg";
import BoxData from "./BoxData"

function BodyBox() {

  return (
    <div>
      <div className="table">
        <div className="table-heading">
          <div className="th-left">
            <img src={Moiz} alt="Moiz Husnain" />
            <b>moizhusnain&nbsp;</b>
            <span>Added slack app example</span>
          </div>
          <div className="th-right">
            <span>a2b374c</span>
            <span>5 days ago</span>
            <img src={Clock} alt="Clock" />
            <strong>12</strong>
            <span>commmits</span>
          </div>
        </div>
        <BoxData />
      </div>
    </div>
  );
}

export default BodyBox;
