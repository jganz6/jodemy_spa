import React, { useState } from "react";

function ResetConfirmEmail(props) {
  const [confirmEmail, setConfirmEmail] = useState("");
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
        <form>
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
          <button
            className="btn"
            type="button"
            onClick={props.buttonList[0].buttonAction}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ResetConfirmEmail;
