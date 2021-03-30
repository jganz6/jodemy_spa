import React from "react";
import "./../css/forgot_password.css";
import { Link } from "react-router-dom";

function getOTP(props) {
  return (
    <div className="forgot_password">
      <div className="container-fluid">
        <div className="row">
          <button className="back_btn" style={{ display: "none" }}>
            <img
              src="https://jodemy.netlify.app/assets/back-icon.png"
              alt="back-icon"
            />
          </button>
          <section className="col d-flex flex-column justify-content-center align-items-center section-1">
            <img
              src="https://jodemy.netlify.app/assets/user-icon-3.png"
              alt="user-icon.png"
            />
          </section>
          <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
            <div className="header-reset-password">
              <h1>Reset Password</h1>
              <div className="black-text">
                Enter verification code we just sent to your email address
              </div>
              {/* <div className="grey-text">
                We will send you the verification code to reset your password
              </div> */}
            </div>
            <div className="form-reset">
              <form>
                <div className="input_OTP">
                  <input type="text" name="input-otp" />
                  <input type="text" name="input-otp" />
                  <input type="text" name="input-otp" />
                  <input type="text" name="input-otp" />
                </div>
                <div className="text-grey">
                  Didn’t receive a code?<Link to="/">Resend</Link>
                </div>
                <div className="btn">Verify</div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default getOTP;
