import React from "react";
import './style/RightBody.css'
import Readme from "./images/book.svg";
import MIT from "./images/license.svg";
import Moiz from "./images/img.jpeg";
import Abdul from "./images/img2.jpeg";

function RightBody() {
  return (
    <>
      <div className="Right-Body-Side">
        <div className="about">
          <h4>About</h4>
          <p>This repo contains example projects on Grandeur Cloud</p>
          <div className="img-text">
            <img scr={Readme} alt="Readme" />
            <span>Readme</span>
          </div>
          <div className="img-text">
            <img scr={MIT} alt="License" />
            <span>MIT License</span>
          </div>
        </div>
        <div className="rele">
          <h4>Releases</h4>
          <p>No releases published</p>
        </div>
        <div className="pack">
          <h4>Packages</h4>
          <p>No packages published</p>
          <span className="line-break"></span>
        </div>
        <div className="contrib">
          <div className="contri">
            <h4>Contributors</h4>
            <p>2</p>
          </div>
          <div className="users">
            <img src={Moiz} alt="moiz husanain" />
            <strong>moizhusain</strong>
            <p>Moiz Husnain</p>
          </div>
          <div className="users">
            <img src={Abdul} alt="abdullah" />
            <strong>abdullahmahboob</strong>
            <p>Muhammad Abd...</p>
          </div>
        </div>
        <div className="lang">
          <h4>Languages</h4>
          <ul>
          <li>Javascript <span>44.0%</span></li>
          <li>C++ <span>24.1%</span></li>
          <li>CSS <span>16.0%</span></li>
          <li>HTML <span>15.9%</span></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightBody;
