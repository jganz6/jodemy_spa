import React from "react";
import eye_icon from "./../assets/eye-icon.png";
import google_icon from "./../assets/google-icon.png";
import "./../css/Login.css";
import { Link } from "react-router-dom";
const Axios = require("axios");
// const FormData = require("form-data");

// async function makeGetRequest(email, password) {
//   let res = await axios
//     .post(
//       "http://localhost:8000/auth/login",
//       { email, password },
//       {
//         headers: {
//           "Access-Control-Allow-Origin": "http://localhost:3000",
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((err) => err);
//   console.log(res.result);
// }
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", password: "", data: {} };
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
    // console.log(this.props);
    // console.log(this.state);
    // const action = () => this.props.history.push(`/Main/Dashboard`, this.state);
    // action();
    const postData = { email: this.state.value, password: this.state.password };
    Axios.post("http://localhost:8000/auth/login", postData)
      .then((res) => {
        if (res.data.success) {
          this.setState({ data: res.data });
          console.log(this.state.data.data.token);
          this.props.history.push(`/Main/Dashboard`, this.state.data.data);
        } else {
          return console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
    // console.log(this.state.users);
    event.preventDefault();
  }
  render() {
    return (
      <div className="Login">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <main className="d-flex flex-column align-items-center justify-content-center">
            <h2>Login</h2>
            <form className="main-form" onSubmit={this.handleSubmit}>
              <div className="box-input">
                <input
                  type="email"
                  name="input-email"
                  placeholder="Example@gmail.com"
                  value={this.state.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
                <label htmlFor="input-email">Email</label>
              </div>
              <div className="box-input">
                <input
                  type="password"
                  name="input-password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <label htmlFor="input-password">Password</label>
              </div>
              <button className="eye-visibility" type="button">
                <img src={eye_icon} alt="eye-icon.png" />
              </button>
              <Link className="forgot-password" to="/ForgotPassword/1">
                Forgot password?
              </Link>
              <button className="btn" type="submit">
                Login
              </button>
              <button className="btn login-google">
                <img src={google_icon} alt="google_icon" /> Login with Google
              </button>
            </form>
            <div className="footer">
              New user? <Link to="/Register">Register</Link>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Login;
