import React from "react";
import "./style/LeftBody.css";
import Master from "./images/master.svg";
import Dropdown from "./images/drop-down.svg";
import Tag from "./images/tag.svg";
import LeftBodyBox from "./LeftBodyBox"
import Download from "./images/download.svg";
import LeftBodyBottom from "./LeftBodyBottom";

function LeftBody() {

  
  return (
    <div>
      <div className="Left-Body-Side">
        <div className="navbar">
          <div className="leftbar">
            <button className="master-button">
              <img src={Master} alt="Master" />
              <span>master</span>
              <img src={Dropdown} alt="DropDown" />
            </button>
            <div className="branch">
              <img src={Master} alt="Master" />
              <strong style={{ marginRight: "5px" }}>1</strong>
              <span style={{ marginRight: "15px" }}>branch</span>
              <img src={Tag} alt="Tag" />
              <strong style={{ marginRight: "15px" }}>0</strong>
              <span>tags</span>
            </div>
          </div>
          <div className="rightbar">
            <button className="button1">
              <span>Go to file</span>
            </button>
            <button className="button2">
              <span>Add file</span>
              <img src={Dropdown} alt="Dropdown" />
            </button>
            <button className="button3">
              <img src={Download} alt="Download" />
              <span>Code</span>
              <img src={Dropdown} alt="Dropdown" />
            </button>
          </div>
        </div>
        <LeftBodyBox />
        <LeftBodyBottom />
      </div>
    </div>
  );
}

export default LeftBody;
