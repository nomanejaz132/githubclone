import React from "react";
import LeftBody from './LeftBody'
import RightBody from './RightBody'
import './style/MainBody.css';

function MainBody() {
  return (
    <div>
      <div className="main">
        <div className="main-container">
            <LeftBody />
            <RightBody />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
