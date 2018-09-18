import React from "react";

const NavBar = props => (
  <nav className="navbar fixed-top navbar navbar-dark bg-dark">
    <div>
    <span>Clicky Game</span>
    </div>
    <div>
    <span>{props.message}</span>
    </div>
    <span>
      <span>Score: {props.clicks}</span>
      <span>   |    </span>
      <span>High Score: {props.highScore}</span>
    </span>

  </nav>
);

export default NavBar;
