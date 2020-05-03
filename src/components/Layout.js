import React from "react";
import Nabvar from "./Navbar";

function Layout(props) {
  return (
    <React.Fragment>
      <Nabvar />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;
