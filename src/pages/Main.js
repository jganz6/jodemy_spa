import React, { Component } from "react";
import "./../css/style.css";
import Profile from "./../components/Profile";
import Activity from "./../components/Activity";

export class Main extends Component {
  state = {
    userName: "",
    value: "",
    content: "",
    content2: "",
  };
  componentDidMount() {
    const { history, match, location } = this.props;
    this.setState({ content: match.params.content });
    this.setState({ content2: match.params.content2 });
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
  componentWillUnmount() {
    console.log("unmount Main");
  }
  render() {
    return (
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
                <img
                  src="http://localhost:3000/assets/Notif-icon.png"
                  alt="Notif-Icon.png"
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
              <div className="menu_dashboard">
                <img
                  src="http://localhost:3000/assets/Dashboard Icon.png"
                  alt="Dashboard Icon.png"
                />
                <span>Dashboard</span>
              </div>
              <div className="menu_activity">
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
              <div className="menu_logout">
                <img
                  src="http://localhost:3000/assets/Logout Icon.png"
                  alt="Logout Icon.png"
                />
                <span>Logout</span>
              </div>
            </div>
          </nav>
          <ContentList data={this.state} />
        </div>
      </div>
    );
  }
}
const ContentList = (props) => {
  console.log(props.data);
  let result = null;
  if (props.data.content === "Dashboard") {
    result = <Profile userName={props.data.userName} />;
  } else if (props.data.content === "Activity") {
    result = <Activity />;
  }
  return result;
};
export default Main;
