import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postResetPassword } from "../redux/actions/auth";
import { persistor } from "../redux/store";

function ResetNewPassword(props) {
  const [confirmPass, setConfirmPass] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  function actionConfirmPass(e) {
    setConfirmPass(true);
  }
  function actionCloseConfirm(e) {
    setConfirmPass(false);
  }
  const handleSubmit = (e) => {
    props.postResetPassword(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/auth/resetPassword`,
      { newPassword },
      props.token
    );
    actionConfirmPass();
    persistor.purge();
    e.preventDefault();
  };
  return (
    <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="header-reset-password">
        <h1>Reset Password</h1>
        <div className="black-text normalWeight">
          Your new password must be different from previous used password!
        </div>
      </div>
      <div
        className="popsPassword"
        style={confirmPass ? { display: "flex" } : { display: "none" }}
      >
        <h2>Password Changed !</h2>
        <img
          src="https://jodemy.netlify.app/assets/ceklis-icon.png"
          alt="ceklis-icon"
        />
        <Link
          to="/"
          onClick={(e) => {
            actionCloseConfirm(e);
          }}
        >
          Login to your account
        </Link>
      </div>
      <div className="form-reset">
        <form className="newPassword" onSubmit={handleSubmit}>
          <div className="inputPassword">
            <input
              type="password"
              name="inputPassword"
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="inputPassword"
              style={
                password.length > 0
                  ? { top: "0", fontWeight: "400", fontSize: "12px" }
                  : null
              }
            >
              Password
            </label>
            <div className="validPass">Must be at least 8 character</div>
          </div>
          <div className="inputPassword">
            <input
              type="password"
              name="inputPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label
              htmlFor="inputPassword"
              style={
                newPassword.length > 0
                  ? { top: "0", fontWeight: "400", fontSize: "12px" }
                  : null
              }
            >
              Confirm Password
            </label>
            <div
              className="checkPass"
              style={
                password !== newPassword
                  ? { visibility: "hidden" }
                  : { display: "block" }
              }
            >
              Password match!{" "}
              <img
                src="https://jodemy.netlify.app/assets/greenCeklis.png"
                alt="greenCeklis"
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Create
          </button>
        </form>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  token: state.auth.results.token,
});
const mapDispatchToProps = (dispatch) => ({
  postResetPassword: (url, data, token) => {
    dispatch(postResetPassword(url, data, token));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetNewPassword);
