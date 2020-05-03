import React from "react";

import confLogo from "../images/badge-header.svg";
import Astronauts from "../images/astronauts.svg";

function NotFound() {
  return (
    <React.Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="img-fluid" src={confLogo} alt="conf logo" />
            <img className="col-6" src={Astronauts} alt="404" />
            <h1 className="col6 font-weight-bold ">404: Page not Found</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
