import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ Component, isLogin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? (
          <Component {...props} isLogin={isLogin} />
        ) : (
          <Redirect
            to={{
              pathname: "/Main/Dashboard",
              state: {
                msg: "Anda sudah login",
              },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
