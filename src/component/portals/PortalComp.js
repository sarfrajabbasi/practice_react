import React from "react";
import ReactDOM from "react-dom";
const PortalComp = () => {
  return ReactDOM.createPortal(
    <h1>This is rendered outside the root!</h1>,
    document.getElementById("portal-root")
  );
};

export default PortalComp;
