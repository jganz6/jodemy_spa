import React from "react";

function resetConfirmEmail() {
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
            <input type="email" name="input-email" />
            <label htmlFor="input-email">Email</label>
          </div>
          <div className="btn">Send</div>
        </form>
      </div>
    </section>
  );
}

export default resetConfirmEmail;
