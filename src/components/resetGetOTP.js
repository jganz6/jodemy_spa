import React from "react";
import "./../css/forgot_password.css";
import { Link } from "react-router-dom";

function getOTP(props) {
  return (
    <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="header-reset-password">
        <h1>Reset Password</h1>
        <div className="black-text">
          Enter verification code we just sent to your email address
        </div>
      </div>
      <div className="form-reset">
        <form>
          <div className="input_OTP">
            <input type="text" name="input-otp" maxLength="1" />
            <input type="text" name="input-otp" maxLength="1" />
            <input type="text" name="input-otp" maxLength="1" />
            <input type="text" name="input-otp" maxLength="1" />
          </div>
          <div className="textGrey">
            Didn’t receive a code?<Link to="/">Resend</Link>
          </div>
          <div className="btn">Verify</div>
        </form>
      </div>
    </section>
  );
}

export default getOTP;
