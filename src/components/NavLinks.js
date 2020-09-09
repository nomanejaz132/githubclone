import React from "react";

 function NavLinks(props) {
  return (
    <div>
      <ul id="links">
        <a href="https://github.com/pulls">
          <li>{props.pull}</li>
        </a>
        <a href="https://github.com/issues">
          <li>{props.issues}</li>
        </a>
        <a href="https://github.com/marketplace">
          <li>{props.marketplace}</li>
        </a>
        <a href="https://github.com/explore">
          <li>{props.explore}</li>
        </a>
      </ul>
    </div>
  );
}

export default NavLinks
