import React, { Component } from "react";
import "./../css/Login.css";
import { Link } from "react-router-dom";
import google_icon from "./../assets/google-icon.png";
import { connect } from "react-redux";
import { postRegister } from "./../redux/actions/auth";
import { persistor } from "../redux/store";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      value: "",
      newPassword: "",
      password: "",
      data: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const postData = {
      username: this.state.username,
      email: this.state.value,
      password: this.state.newPassword,
    };
    this.props.postRegister(
      `${process.env.REACT_APP_DOMAINAPI}:${process.env.REACT_APP_PORTAPI}/auth/register`,
      postData
    );
    persistor.purge();
    event.preventDefault();
  }
  render() {
    console.log(this.state);
    return (
      <div className="Login">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <main className="d-flex flex-column align-items-center justify-content-center">
            <h2>Register</h2>
            <form className="main-form" onSubmit={this.handleSubmit}>
              <div className="box-input">
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={(e) => this.setState({ username: e.target.value })}
                />
                <label htmlFor="input-email">Username</label>
              </div>
              <div className="box-input">
                <input
                  type="email"
                  name="input-email"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
                <label htmlFor="input-email">Email</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  name="input-password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <label htmlFor="input-password">Password</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  name="input-password"
                  value={this.state.newPassword}
                  onChange={(e) =>
                    this.setState({ newPassword: e.target.value })
                  }
                />
                <label htmlFor="input-password">Confirm Password</label>
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
const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => ({
  postRegister: (url, data) => {
    dispatch(postRegister(url, data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
