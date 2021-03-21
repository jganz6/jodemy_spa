import React, { Component } from "react";
import "./../css/style.css";
import Profile from "./../components/Profile";
import Activity from "./../components/Activity";
import Dashboard from "./../components/Dashboard";

export class Main extends Component {
  state = {
    userName: "",
    value: "",
    buttonList: [
      {
        buttonAction: () => this.props.history.push(`/Main/Profile`),
      },
      {
        buttonAction: () => this.props.history.push(`/Main/Dashboard`),
      },
      {
        buttonAction: () => this.props.history.push(`/Main/Activity/v1`),
        buttonAction1: () => this.props.history.push(`/Main/Activity/v2`),
        buttonAction2: () => this.props.history.push(`/Main/Activity/v3`),
        buttonAction3: () => this.props.history.push(`/Main/Activity/v4`),
      },
      {
        buttonAction: () => this.props.history.push(`/`),
      },
    ],
  };
  componentDidMount() {
    const { history, location } = this.props;
    const action = () => history.push(`/`);
    const dataAkun = {
      email: "jodiemanopo28@gmail.com",
      password: "henning1915",
      username: "jodie soluna manopo",
    };
    if (
      location.state.value === dataAkun.email &&
      location.state.password === dataAkun.password
    ) {
      this.setState({ userName: dataAkun.username });
    } else {
      action();
    }
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("unmount Main");
  }
  render() {
    const { match } = this.props;
    return (
      <div className="App_Main">
        <div className="nav-bar">
          <button id="btn-nav" type="button">
            &#x2630;
          </button>
        </div>
        <button id="btn-chat" className="btn-chat" type="button">
          <img
            src="http://localhost:3000/assets/dashboard/chat.png"
            alt="btn_chat.png"
          />
        </button>
        <div className="container-fluid">
          <nav id="nav-side" className="menu-main">
            <div
              className={
                match.params.content === "Profile"
                  ? "menu-profile profile-clicked"
                  : "menu-profile"
              }
              onClick={this.state.buttonList[0].buttonAction}
            >
              <div className="menu_notif">
                <img
                  className="notif"
                  src={
                    match.params.content === "Profile"
                      ? "http://localhost:3000/assets/Notif-Icon.png"
                      : "http://localhost:3000/assets/white-notif-icon.png"
                  }
                  alt="notif-Icon"
                />
              </div>
              <div className="menu_picture">
                <img
                  src="http://localhost:3000/assets/Profile Picture.png"
                  alt=" Profile Pictur"
                />
              </div>
              <div className="menu_name">{`${this.state.userName}`}</div>
              <div className="menu_status">online</div>
            </div>
            <div className="menu-list">
              <div
                className={
                  match.params.content === "Dashboard"
                    ? "menu_dashboard menu-list-clicked"
                    : "menu_dashboard"
                }
                onClick={this.state.buttonList[1].buttonAction}
              >
                <img
                  src="http://localhost:3000/assets/Dashboard Icon.png"
                  alt="Dashboard Icon.png"
                />
                <span>Dashboard</span>
              </div>
              <div
                className={
                  match.params.content === "Activity"
                    ? "menu_activity menu-list-clicked"
                    : "menu_activity"
                }
                onClick={this.state.buttonList[2].buttonAction}
              >
                <img
                  src="http://localhost:3000/assets/Activity Icon.png"
                  alt="Activity Icon.png"
                />
                <span>Activity</span>
              </div>
              <div className="menu_help">
                <img
                  src="http://localhost:3000/assets/Help Icon.png"
                  alt="Help Icon.png"
                />
                <span>Help</span>
              </div>
              <div
                className="menu_logout"
                onClick={this.state.buttonList[3].buttonAction}
              >
                <img
                  src="http://localhost:3000/assets/Logout Icon.png"
                  alt="Logout Icon.png"
                />
                <span>Logout</span>
              </div>
            </div>
          </nav>
          <ContentList
            data={this.state}
            content={match.params.content}
            content2={match.params.content2}
          />
        </div>
      </div>
    );
  }
}
const ContentList = (props) => {
  console.log(props.data);
  let result = null;
  if (props.content === "Profile") {
    result = <Profile userName={props.data.userName} />;
  } else if (props.content === "Activity") {
    result = (
      <Activity content2={props.content2} buttonList={props.data.buttonList} />
    );
  } else if (props.content === "Dashboard") {
    result = <Dashboard />;
  }
  return result;
};
export default Main;
