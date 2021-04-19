import { React, useState } from "react";
import "./../css/forgot_password.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { postVerifyOTP } from "./../redux/actions/auth";
//update
function GetOTP(props) {
  const [otp, setOtp] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const history = useHistory();
  const handleSubmit = (e) => {
    const finalOTP = otp[0] + otp[1] + otp[2] + otp[3];
    props.postVerifyOTP(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/auth/verifyOTP`,
      { otp: finalOTP, id: props.id }
    );
    console.log(finalOTP);
    history.push("3");
    e.preventDefault();
  };
  return (
    <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="header-reset-password">
        <h1>Reset Password</h1>
        <div className="black-text">
          Enter verification code we just sent to your email address
        </div>
      </div>
      <div className="form-reset">
        <form onSubmit={handleSubmit}>
          <div className="input_OTP">
            <input
              type="text"
              name="input-otp"
              value={otp[0]}
              maxLength="1"
              onChange={(e) => setOtp({ ...otp, 0: e.target.value })}
            />
            <input
              type="text"
              name="input-otp"
              value={otp[1]}
              maxLength="1"
              onChange={(e) => setOtp({ ...otp, 1: e.target.value })}
            />
            <input
              type="text"
              name="input-otp"
              value={otp[2]}
              maxLength="1"
              onChange={(e) => setOtp({ ...otp, 2: e.target.value })}
            />
            <input
              type="text"
              name="input-otp"
              value={otp[3]}
              maxLength="1"
              onChange={(e) => setOtp({ ...otp, 3: e.target.value })}
            />
          </div>
          <div className="textGrey">
            Didn’t receive a code?<Link to="/">Resend</Link>
          </div>
          <button className="btn" type="submit">
            Verify
          </button>
        </form>
      </div>
    </section>
  );
}
const mapStateToProps = (state) => ({
  id: state.auth.results[0],
});
const mapDispatchToProps = (dispatch) => ({
  postVerifyOTP: (url, data) => {
    dispatch(postVerifyOTP(url, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(GetOTP);
