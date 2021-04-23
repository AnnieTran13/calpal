<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>CALPAL</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to="/journal">
          <li>Journal</li>
        </Link>
        <Link style={navStyle} to="/recipes">
          <li>Recipes</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
=======
import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3>CALPAL</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/profile">
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to="/journal">
          <li>Journal</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
>>>>>>> e9c051d04b2f1e941f2a4dcf189becfa86da7fd5
