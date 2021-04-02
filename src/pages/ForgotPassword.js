import React, { Component } from "react";
import "./../css/forgot_password.css";
import ResetConfirmEmail from "./../components/ResetConfirmEmail";
import ResetGetOTP from "./../components/ResetGetOTP";
import ResetNewPassword from "./../components/ResetNewPassword";

export class ForgotPassword extends Component {
  state = {
    buttonList: [
      {
        buttonAction: () => this.props.history.push("/ForgotPassword/2"),
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
            <button
              className="back_btn"
              onClick={this.state.back_action}
              style={match.params.step !== "1" ? { display: "none" } : null}
            >
              <img
                src="https://jodemy.netlify.app/assets/back-icon.png"
                alt="back-icon"
              />
            </button>
            <section className="col d-flex flex-column justify-content-center align-items-center section-1">
              <img
                src={
                  match.params.step === "1"
                    ? "https://jodemy.netlify.app/assets/user-icon.png"
                    : "https://jodemy.netlify.app/assets/user-icon-1.png"
                }
                alt="user-icon.png"
              />
            </section>
            <ResetSection
              buttonList={this.state.buttonList}
              step={match.params.step}
            />
          </div>
        </div>
      </div>
    );
  }
}
function ResetSection(props) {
  let result = null;
  console.log(props);
  if (props.step === "1") {
    result = <ResetConfirmEmail buttonList={props.buttonList} />;
  } else if (props.step === "2") {
    result = <ResetGetOTP />;
  } else if (props.step === "3") {
    result = <ResetNewPassword />;
  }
  return result;
}

export default ForgotPassword;
