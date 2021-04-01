import React, { Component } from "react";
import "./../css/forgot_password.css";
import ResetConfirmEmail from "../components/resetConfirmEmail";
import ResetGetOTP from "../components/resetGetOTP";
import ResetNewPassword from "../components/ResetNewPassword";

export class ForgotPassword extends Component {
  state = {
    buttonList: [
      {
        buttonAction: () => this.props.history.push("/ResetPassword/1"),
      },
    ],
    back_action: () => this.props.history.push("/"),
  };
  render() {
    const { match } = this.props;
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
            <ResetSection step={match.params.step} />
          </div>
        </div>
      </div>
    );
  }
}
function ResetSection(props) {
  let result = null;
  if (!props.step) {
    result = <ResetConfirmEmail />;
  } else if (props.step === "1") {
    result = <ResetGetOTP />;
  } else if (props.step === "2") {
    result = <ResetNewPassword />;
  }
  return result;
}

export default ForgotPassword;
