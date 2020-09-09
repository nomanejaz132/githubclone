import React from "react";
import "./style/Data.css";

function Data(props) {
  let icon = require.context("../components/box-img", true);
  icon = require(`./box-img/${props.icon}.svg`);

  return (
    <div>
      <div className="table-data">
        <div className="td-i">
          <img src={icon} alt="Icon" className="img-icon" />
        </div>
        <div className="table-text">
          <div className="tt-l">{props.ft}</div>
          <div className="tt-m">{props.mt}</div>
          <div className="tt-r">{props.lt}</div>
        </div>
      </div>
    </div>
  );
}

export default Data;
