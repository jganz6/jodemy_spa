import React, { Component } from "react";
import "./../css/forgot_password.css";
import ResetConfirmEmail from "../components/resetConfirmEmail";
import ResetGetOTP from "../components/resetGetOTP";
import ResetNewPassword from "../components/ResetNewPassword";

export class ForgotPassword extends Component {
  state = {
    back_action: () => this.props.history.push("/"),
  };
  render() {
    return (
      <div className="forgot_password">
        <div className="container-fluid">
          <div className="row">
            <button className="back_btn" onClick={this.state.back_action}>
              <img
                src="https://jodemy.netlify.app/assets/back-icon.png"
                alt="back-icon"
              />
            </button>
            <section className="col d-flex flex-column justify-content-center align-items-center section-1">
              <img
                src="https://jodemy.netlify.app/assets/user-icon.png"
                alt="user-icon.png"
              />
            </section>
            <ResetSection />
          </div>
        </div>
      </div>
    );
  }
}
function ResetSection(props) {
  const content = 3;
  if (content === 1) {
    return <ResetConfirmEmail />;
  } else if (content === 2) {
    return <ResetGetOTP />;
  } else if (content === 3) {
    return <ResetNewPassword />;
  }
}

export default ForgotPassword;
