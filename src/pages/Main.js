import React, { Component } from "react";

export class Main extends Component {
  state = {
    userName: "",
    value: "",
  };
  componentDidMount() {
    const { history, match, location } = this.props;
    const action = () => history.push(`/`);
    const dataAkun = {
      email: "jodiemanopo28@gmail.com",
      password: "henning1915",
      username: "jodie soluna manopo",
    };
    console.log(history, match, location);
    if (
      location.state.value === dataAkun.email &&
      location.state.password === dataAkun.password
    ) {
      this.setState({ userName: dataAkun.username });
    } else {
      action();
    }
  }
  componentWillUnmount() {
    console.log("unmount Main");
  }
  render() {
    const dash_board = () => (
      <div>
        <h2>location: {`${this.state.userName}`}</h2>;
      </div>
    );
    return dash_board();
  }
}

export default Main;
