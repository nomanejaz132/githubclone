import React from "react";
import LeftNav from "./LeftNav";
import Link from "./Link";
import RightNav from "./RightNav";
import "./style/NavBarUnder.css";

function NavBarUnder() {
  const links = [{name: "Code", icon:"code", altText: "Code"}, {name: "Issues", icon:"issues", altText: "Issues"}, {name: "Pull requests", icon:"pull-requests", altText: "Pull requests"}, {name: "Action", icon:"actions", altText: "Action"}, {name: "Projects", icon:"projects", altText: "Projects"}, {name: "Security", icon:"security", altText: "Security"}, {name: "Insight", icon:"insights", altText: "Insights"}];

  return (
    <div>
      <div className="container">
        <div className="upper-container">
        <LeftNav />
        <RightNav />
        </div>
        <div className="lower-container">
          {
            links.map(link => <Link name={link.name} icon={link.icon} alt={link.altText}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default NavBarUnder;
