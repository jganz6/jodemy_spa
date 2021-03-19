import React, { Component } from "react";
import "./../css/style.css";
import Profile from "./../components/Profile";

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
      <div className="App_Main">
        <div className="nav-bar">
          <button id="btn-nav" type="button">
            &#x2630;
          </button>
        </div>
        <div className="container-fluid">
          <nav id="nav-side" className="menu-main">
            <div className="menu-profile">
              <div className="menu_notif">
                <img src="./../assets/Notif-icon.png" alt="Notif-Icon.png" />
              </div>
              <div className="menu_picture">
                <img
                  src="./../assets/Profile Picture.png"
                  alt=" Profile Pictur"
                />
              </div>
              <div className="menu_name">{`${this.state.userName}`}</div>
              <div className="menu_status">online</div>
            </div>
            <div className="menu-list">
              <div className="menu_dashboard">
                <img
                  src="./../assets/Dashboard Icon.png"
                  alt="Dashboard Icon.png"
                />
                <span>Dashboard</span>
              </div>
              <div className="menu_activity">
                <img
                  src="./../assets/Activity Icon.png"
                  alt="Activity Icon.png"
                />
                <span>Activity</span>
              </div>
              <div className="menu_help">
                <img src="./../assets/Help Icon.png" alt="Help Icon.png" />
                <span>Help</span>
              </div>
              <div className="menu_logout">
                <img src="./../assets/Logout Icon.png" alt="Logout Icon.png" />
                <span>Logout</span>
              </div>
            </div>
          </nav>
          <Profile userName={this.state.userName} />
        </div>
      </div>
    );
    return dash_board();
  }
}

export default Main;
