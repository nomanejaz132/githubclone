import React from "react";
import "./style/Link.css";


function Link(props) {

  let icon = require.context('../components/images', true);
  icon = require(`./images/${props.icon}.svg`);
  return (
    <>
      <a
        className="link"
        href="https://github.com/grandeurtech/examples"
        alt="Code"
      >
      <img src={icon} alt={props.altText}/>
        <span>{props.name}</span>
      </a>
    </>
  );
}

export default Link;
