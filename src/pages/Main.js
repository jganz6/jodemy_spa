import React, { Component } from "react";
import "./../css/style.css";
import Profile from "./../components/Profile";
import Activity from "./../components/Activity";
import Dashboard from "./../components/Dashboard";
import DashboardFacilitator from "./../components/DashboardFacilitator";
import data from "./../data/data_akun.json";

export class Main extends Component {
  state = {
    userName: "",
    role: "",
    value: "",
    buttonList: [
      {
        buttonAction: () => this.props.history.push(`/Main/Profile`),
      },
      {
        buttonAction: () => this.props.history.push(`/Main/Dashboard`),
        buttonAction1: () => this.props.history.push(`/Main/Dashboard/f1`),
      },
      {
        buttonAction: () => this.props.history.push(`/Main/Activity/v1`),
        buttonAction1: () => this.props.history.push(`/Main/Activity/v2`),
        buttonAction2: () => this.props.history.push(`/Main/Activity/v3`),
        buttonAction3: () => this.props.history.push(`/Main/Activity/v4`),
        buttonAction4: () => this.props.history.push(`/Main/Activity/f1`),
        buttonAction5: () => this.props.history.push(`/Main/Activity/f2`),
      },
      {
        buttonAction: () => this.props.history.push(`/`),
      },
    ],
    statusNav: false,
    chat: false,
    styleChat: {
      display: "flex",
      right: "-20px",
      zIndex: "5",
      top: "-20px",
      height: "100vh",
      borderRadius: "0 0 0 20px",
      width: "calc(100vw - 60px)",
    },
    styleNav: {
      display: "flex",
      marginTop: "0px",
      zIndex: "4",
      left: "-20px",
      height: "100vh",
      borderRadius: "0 0 20px 0",
    },
  };
  componentDidMount() {
    const { history, location } = this.props;
    const action = () => history.push(`/`);
    const cekData = data.find(({ email }) => email === location.state.value);
    if (cekData) {
      this.setState({ userName: cekData.username });
      this.setState({ role: cekData.access });
    } else {
      console.log("tidak ada data");
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
        <div
          className="nav-bar"
          // style={
          //   this.state.statusNav === true
          //     ? {
          //         width: "100vw",
          //         height: "100vh",
          //         backgroundColor: "rgba(0, 0, 0, 0.3)",
          //         overflow: "hidden",
          //       }
          //     : null
          // }
        >
          <button
            id="btn-nav"
            type="button"
            style={
              this.state.statusNav === true
                ? {
                    display: "none",
                    marginLeft: "230px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "50px",
                    color: "#fff",
                  }
                : null
            }
            onClick={() => {
              this.state.statusNav === false
                ? this.setState({ statusNav: true })
                : this.setState({ statusNav: false });
            }}
          >
            {this.state.statusNav === true ? " X " : "\u2630"}
          </button>
        </div>
        <button
          id="btn-chat"
          className={
            match.params.content === "Dashboard" ? "btn-chat" : "btn-none"
          }
          style={
            this.state.chat === true
              ? {
                  display: "none",
                  left: "0",
                  zIndex: "5",
                  backgroundColor: "red",
                  top: "0",
                }
              : null
          }
          type="button"
          onClick={() => {
            this.state.chat === false
              ? this.setState({ chat: true })
              : this.setState({ chat: false });
          }}
        >
          {this.state.chat === true ? (
            " X "
          ) : (
            <img
              src="https://jodemy.netlify.app/assets/dashboard/white-chat.png"
              alt="btn_chat.png"
            />
          )}
        </button>
        <div className="container-fluid">
          <div
            className="popsNav"
            style={
              this.state.statusNav === true || this.state.chat === true
                ? { display: "block" }
                : null
            }
            onClick={() => {
              if (this.state.statusNav === true) {
                this.setState({ statusNav: false });
              } else if (this.state.chat === true) {
                this.setState({ chat: false });
              }
            }}
          ></div>
          <nav
            id="nav-side"
            className="menu-main"
            style={this.state.statusNav === true ? this.state.styleNav : null}
          >
            <div
              className={
                match.params.content === "Profile"
                  ? "menu-profile profile-clicked"
                  : "menu-profile"
              }
              onClick={this.state.buttonList[0].buttonAction}
              style={
                this.state.statusNav === true
                  ? { borderRadius: "0 0 0 0" }
                  : null
              }
            >
              <div className="menu_notif">
                <img
                  className="notif"
                  src={
                    match.params.content === "Profile"
                      ? "https://jodemy.netlify.app/assets/Notif-Icon.png"
                      : "https://jodemy.netlify.app/assets/white-notif-icon.png"
                  }
                  alt="notif-Icon"
                />
              </div>
              <div className="menu_picture">
                <img
                  src="https://jodemy.netlify.app/assets/Profile Picture.png"
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
                onClick={
                  this.state.role === "user"
                    ? this.state.buttonList[1].buttonAction
                    : this.state.buttonList[1].buttonAction1
                }
              >
                <img
                  src="https://jodemy.netlify.app/assets/Dashboard Icon.png"
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
                onClick={
                  this.state.role === "user"
                    ? this.state.buttonList[2].buttonAction
                    : this.state.buttonList[2].buttonAction4
                }
              >
                <img
                  src="https://jodemy.netlify.app/assets/Activity Icon.png"
                  alt="Activity Icon.png"
                />
                <span>Activity</span>
              </div>
              <div className="menu_help">
                <img
                  src="https://jodemy.netlify.app/assets/Help Icon.png"
                  alt="Help Icon.png"
                />
                <span>Help</span>
              </div>
              <div
                className="menu_logout"
                onClick={this.state.buttonList[3].buttonAction}
              >
                <img
                  src="https://jodemy.netlify.app/assets/Logout Icon.png"
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
  let result = null;
  if (props.content === "Profile") {
    result = <Profile userName={props.data.userName} />;
  } else if (props.content === "Activity") {
    result = (
      <Activity content2={props.content2} buttonList={props.data.buttonList} />
    );
  } else if (props.content === "Dashboard") {
    if (props.data.role === "user") {
      result = <Dashboard buttonShow={props.data} />;
    } else {
      result = <DashboardFacilitator buttonShow={props.data} />;
    }
  }
  return result;
};
export default Main;
