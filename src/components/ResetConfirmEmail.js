import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { postSendOTP } from "../redux/actions/auth";
import { useHistory } from "react-router-dom";
//update
function ResetConfirmEmail(props) {
  const [confirmEmail, setConfirmEmail] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (props.auth.isFulfilled) {
      history.push("2");
    }
  });

  const handleSubmit = (e) => {
    const postData = { email: confirmEmail };
    props.postSendOTP(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/auth/sendOTP`,
      postData
    );
    e.preventDefault();
  };
  return (
    <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="header-reset-password">
        <h1>Reset Password</h1>
        <div className="black-text">
          Enter your email address linked to this account.
        </div>
        <div className="grey-text">
          We will send you the verification code to reset your password
        </div>
      </div>
      <div className="form-reset">
        <form onSubmit={handleSubmit}>
          <div className="input-email">
            <input
              type="email"
              name="input-email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
            <label htmlFor="input-email">Email</label>
          </div>
          <button className="btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
const mapStateToProps = (state, ownProps) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  postSendOTP: (url, data) => {
    dispatch(postSendOTP(url, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetConfirmEmail);
