import React, { useState } from "react";
import { Link } from "react-router-dom";

function ResetNewPassword() {
  const [validPass, setValidPass] = useState(false);
  function checkPass(e) {
    if (e.target.value < 8) {
      console.log("character must be 8");
      setValidPass(false);
    } else if (e.target.value >= 8) {
      setValidPass(true);
    }
  }
  return (
    <section className="col d-flex flex-column justify-content-center align-items-center bg-white">
      <div className="header-reset-password">
        <h1>Reset Password</h1>
        <div className="black-text normalWeight">
          Your new password must be different from previous used password!
        </div>
      </div>
      <div className="popsPassword">
        <h2>Password Changed !</h2>
        <img
          src="https://jodemy.netlify.app/assets/ceklis-icon"
          alt="ceklis-icon"
        />
        <Link to="/">Login to your account</Link>
      </div>
      <div className="form-reset">
        <form className="newPassword">
          <div className="inputPassword">
            <input
              type="password"
              name="inputPassword"
              onChange={(e) => checkPass(e)}
              minLength="8"
            />
            <label htmlFor="inputPassword">Password</label>
            <div className="validPass">Must be at least 8 character</div>
          </div>
          <div className="inputPassword">
            <input type="password" name="inputPassword" />
            <label htmlFor="inputPassword">Password</label>
            <div className="validPass">
              Password match!{" "}
              <img
                src="https://jodemy.netlify.app/assets/greenCeklis"
                alt="greenCeklis"
              />
            </div>
          </div>
          <div className="btn">Create</div>
        </form>
      </div>
    </section>
  );
}

export default ResetNewPassword;
