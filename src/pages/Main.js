import React, { Component } from "react";
import "./../css/style.css";
import Profile from "./../components/Profile";
import Activity from "./../components/Activity";
import Dashboard from "./../components/Dashboard";
import DashboardFacilitator from "./../components/DashboardFacilitator";
import { connect } from "react-redux";
import { getMyClass } from "../redux/actions/myClass";
import { getNewClass } from "../redux/actions/newClass";
import { getUser } from "../redux/actions/user";
export class Main extends Component {
  constructor(props) {
    super(props);
    this.handleNotifPops = this.handleNotifPops.bind(this);
  }
  state = {
    myClass: [],
    dataUser: {},
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
    popsNotif: false,
  };
  handleNotifPops() {
    this.state.popsNotif === true
      ? this.setState({ popsNotif: false })
      : this.setState({ popsNotif: true });
    console.log(this.state.popsNotif);
  }
  componentDidMount() {
    const token = this.props.token;
    this.props.getUser("http://localhost:8000/users", token);
    this.props.getMyClass("http://localhost:8000/class/myClass", token);
    this.props.getNewClass(
      "http://localhost:8000/class/newClass?limit=10",
      token
    );
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
          <button
            id="btn-nav"
            type="button"
            style={
              this.state.statusNav === true
                ? {
                    visibility: "hidden",
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
          <div
            className="overlayNotif"
            style={
              this.state.popsNotif === false
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <div className="popsNotif">
              <button className="closePopsNotif" onClick={this.handleNotifPops}>
                x
              </button>
              <h2 className="headerPopsNotif">Notification</h2>
              <div className="notifPerDay">
                <h3 className="subHeadPopsNotif">Yesterday</h3>
                <div className="spoilerNotif">
                  <img
                    src="https://jodemy.netlify.app/assets/notif-image/notifHot-icon.png"
                    alt="notifHot-icon"
                  />
                  <div className="spoilerMessage">
                    There are 10 news update for today. Don’t miss it!
                  </div>
                  <div className="timeNotif">2 min</div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="menu_picture">
                <img
                  src="https://jodemy.netlify.app/assets/Profile Picture.png"
                  alt=" Profile Pictur"
                />
              </div>
              <div className="menu_name">{`${this.props.dataUser.username}`}</div>
              <div className="menu_status">online</div>
            </div>
            <div className="menu_notif" onClick={this.handleNotifPops}>
              <img
                className="notif"
                style={
                  this.state.popsNotif === true ? { display: "none" } : null
                }
                src={
                  match.params.content === "Profile"
                    ? "https://jodemy.netlify.app/assets/Notif-Icon.png"
                    : "https://jodemy.netlify.app/assets/white-notif-icon.png"
                }
                alt="notif-Icon"
              />
            </div>
            <div className="menu-list">
              <div
                className={
                  match.params.content === "Dashboard"
                    ? "menu_dashboard menu-list-clicked"
                    : "menu_dashboard"
                }
                onClick={
                  this.props.dataUser.role === 0
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
                  this.props.dataUser.role === 0
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
            dataUser={this.props.dataUser}
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
    result = <Profile userName={props.dataUser.username} />;
  } else if (props.content === "Activity") {
    result = (
      <Activity
        content2={props.content2}
        buttonList={props.data.buttonList}
        data={props.data}
      />
    );
  } else if (props.content === "Dashboard") {
    if (props.dataUser.role === 0) {
      result = <Dashboard buttonShow={props.data} />;
    } else {
      result = <DashboardFacilitator buttonShow={props.data} />;
    }
  }
  return result;
};
const mapStateToProps = (state, ownProps) => ({
  token: state.auth.results.token,
  dataUser: state.user.results,
});
const mapDispatchToProps = (dispatch) => ({
  getUser: (url, token) => {
    dispatch(getUser(url, token));
  },
  getMyClass: (url, token) => dispatch(getMyClass(url, token)),
  getNewClass: (url, token) => dispatch(getNewClass(url, token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);
