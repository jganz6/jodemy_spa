import React from "react";
import { useLocation } from "react-router-dom";

function NotFound() {
  let location = useLocation();
  const styleNotFound = {
    color: "red",
  };
  return (
    <div>
      <h1 style={styleNotFound}>
        (404) NotFound for : <code>{location.pathname}</code>
      </h1>
    </div>
  );
}

export default NotFound;
