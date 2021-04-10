import React from "react";
import ReactDOM from "react-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
import store from "./redux/store/store";
import { Provider } from "react-redux";

const AppWithRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Main/:content?/:content2?" component={Main} />
      <Route path="/ForgotPassword/:step?" component={ForgotPassword} />
      <Route path="/Register" component={Register} />
    </Router>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithRouter />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
