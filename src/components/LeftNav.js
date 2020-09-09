import React from "react";
import Repo from "./images/repo.svg";
import "./style/LeftNav.css"

function LeftNav() {
  return (
    <div>
      <div className="left-side">
        <img src={Repo} alt="Repo" />
        <span>
          <a href="https://github.com/grandeurtech">grandeurtech</a>
        </span>
        <span className="margin">/</span>
        <strong>
          <a href="https://github.com/grandeurtech/examples">examples</a>
        </strong>
      </div>
    </div>
  );
}

export default LeftNav;
