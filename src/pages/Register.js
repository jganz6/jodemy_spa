import React, { Component } from "react";
import "./../css/Login.css";
import { Link } from "react-router-dom";
import google_icon from "./../assets/google-icon.png";

export class Register extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <main className="d-flex flex-column align-items-center justify-content-center">
            <h2>Register</h2>
            <form className="main-form">
              <div className="box-input">
                <input
                  type="email"
                  name="input-email"
                  placeholder="Example@gmail.com"
                />
                <label htmlFor="input-email">Email</label>
              </div>
              <div className="box-input">
                <input
                  type="email"
                  name="input-email"
                  placeholder="Example@gmail.com"
                />
                <label htmlFor="input-email">Confirm Email</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  name="input-password"
                  placeholder="password"
                />
                <label htmlFor="input-password">Password</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  name="input-password"
                  placeholder="password"
                />
                <label htmlFor="input-password">Password</label>
              </div>
              <button className="btn" type="submit">
                Register
              </button>
              <button className="btn login-google">
                <img src={google_icon} alt="google_icon" /> Register with Google
              </button>
            </form>
            <div className="footer">
              Already have an account ? <Link to="/">Login</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Register;
