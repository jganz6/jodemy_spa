import React from "react";
import eye_icon from "./../assets/eye-icon.png";
import google_icon from "./../assets/google-icon.png";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  componentDidMount() {
    console.log("did mount");
    console.log(this.props.location.state);
  }
  componentDidUpdate() {
    console.log("update!!");
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.value +
        "\n Password: " +
        this.state.password
    );
    console.log(this.props);
    console.log(this.state);
    const action = () => this.props.history.push(`/Main/Dashboard`, this.state);
    action();
    event.preventDefault();
  }
  render() {
    return (
      <div className="Login">
        <div className="container-fluid">
          <main>
            <h2>Login</h2>
            <form className="main-form" onSubmit={this.handleSubmit}>
              <input
                type="email"
                name="input-email"
                placeholder="Example@gmail.com"
                value={this.state.value}
                onChange={(e) => this.setState({ value: e.target.value })}
              />
              <label htmlFor="input-email">Email</label>
              <input
                type="password"
                name="input-password"
                placeholder="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <label htmlFor="input-password">Password</label>
              <button className="eye-visibility" type="button">
                <img src={eye_icon} alt="eye-icon.png" />
              </button>
              <a className="forgot-password" href="ForgotPassword.html">
                Forgot password?
              </a>
              <button className="btn" type="submit">
                Login
              </button>
              <button className="btn login-google">
                <img src={google_icon} alt="google_icon" /> Login with Google
              </button>
            </form>
            <div className="footer">
              New user? <a href="http://">Register</a>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Login;
