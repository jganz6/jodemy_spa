import React, { Component } from "react";
import "./../css/forgot_password.css";

export class ForgotPassword extends Component {
  state = {
    back_action: () => this.props.history.push("/"),
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <button className="back_btn" onClick={this.state.back_action}>
            <img src="./assets/back-icon.png" alt="back-icon" />
          </button>
          <section className="col d-flex flex-column justify-content-center align-items-center section-1">
            <img src="./assets/user-icon.png" alt="user-icon.png" />
          </section>
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
              <form>
                <div className="input-email">
                  <input
                    type="email"
                    name="input-email"
                    placeholder="Example@gmail.com"
                  />
                  <label htmlFor="input-email">Email</label>
                </div>
                <div className="btn">Send</div>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
