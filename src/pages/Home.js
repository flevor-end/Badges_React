import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
// import platziconfLogoImage from "../images/platziconf-logo.svg";
import astronautsImage from "../images/astronauts.svg";

export default class home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <h1>Prueba fabian pedraza</h1>

              <h1>Badges Management System</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                src={astronautsImage}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
