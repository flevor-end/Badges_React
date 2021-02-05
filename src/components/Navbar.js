import React from "react";

// import logo from "../images/logo.svg";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <span className="font-weight-light">Fabian</span>
            <span className="font-weight-bold">Pedraza</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
