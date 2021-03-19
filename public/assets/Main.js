import React, { Component } from "react";
import "./../css/style.css";

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
        <div className="nav-bar">
          <button id="btn-nav" type="button" onclick="openNav();">
            &#x2630;
          </button>
        </div>
        <div className="container-fluid">
          <nav id="nav-side" className="menu-main">
            <div
              className="menu-profile"
              onclick="window.location='/Profile.html';"
            >
              <div className="menu_notif">
                <img src="/assets/Notif Icon.png" alt="Notif Icon.png" />
              </div>
              <div className="menu_picture">
                <img
                  src="/assets/Profile Picture.png"
                  alt="Profile Picture.png"
                />
              </div>
              <div className="menu_name">Emir Kharisma</div>
              <div className="menu_status">online</div>
            </div>
            <div className="menu-list">
              <div
                className="menu_dashboard"
                onclick="window.location='/Dashboard.html';"
              >
                <img src="assets/Dashboard Icon.png" alt="Dashboard Icon.png" />
                <span>Dashboard</span>
              </div>
              <div
                className="menu_activity"
                onclick="window.location='/Activity.html';"
              >
                <img src="assets/Activity Icon.png" alt="Activity Icon.png" />
                <span>Activity</span>
              </div>
              <div className="menu_help" onclick="window.location='#';">
                <img src="assets/Help Icon.png" alt="Help Icon.png" />
                <span>Help</span>
              </div>
              <div
                className="menu_logout"
                onclick="window.location='/index.html';"
              >
                <img src="assets/Logout Icon.png" alt="Logout Icon.png" />
                <span>Logout</span>
              </div>
            </div>
          </nav>
          <main>
            <header className=" d-flex flex-column justify-content-center align-items-center">
              <div className="profile-picture">
                <img
                  src="./assets/Profile-Picture-banner.png"
                  alt="Profile-Picture-banner.png"
                />
                <img src="./assets/Edit Icon.png" alt="Edit Icon.png" />
              </div>
              <div className="profile-name">Emir Kharisma</div>
            </header>
            <div>
              <h2 className="profile-title">Profile Settings</h2>
              <div className="profile-option">
                <div className="option-list">
                  <img
                    src="assets/profil-settings/Phone Icon.png"
                    alt="Phone Icon.png"
                  />
                  <span className="setting_text">Phone Number</span>
                  <span className="arrow">&#x3e;</span>
                </div>
                <div className="option-list">
                  <img
                    src="assets/profil-settings/PIN Icon.png"
                    alt="PIN Icon.png"
                  />
                  <span className="setting_text">Change Password</span>
                  <span className="arrow">&#x3e;</span>
                </div>
                <div className="option-list">
                  <img
                    src="assets/profil-settings/Chats Icon.png"
                    alt="Chats Icon.png"
                  />
                  <span className="setting_text">Chat settings</span>
                  <span className="arrow">&#x3e;</span>
                </div>
                <div className="option-list">
                  <img
                    src="assets/profil-settings/Notif Icon.png"
                    alt="Notif Icon.png"
                  />
                  <span className="setting_text">Push Notification</span>
                  <span className="arrow">&#x3e;</span>
                </div>
                <div className="option-list">
                  <img
                    src="assets/profil-settings/Security Icon.png"
                    alt="Security Icon.png"
                  />
                  <span className="setting_text">Privacy and Security</span>
                  <span className="arrow">&#x3e;</span>
                </div>
                <div className="option-list">
                  <img
                    src="assets/profil-settings/Storage Icon.png"
                    alt="Storage Icon.png"
                  />
                  <span className="setting_text">Data and Storage</span>
                  <span className="arrow">&#x3e;</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
    return dash_board();
  }
}

export default Main;
