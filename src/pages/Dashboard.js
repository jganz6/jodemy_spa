import React, { Component } from "react";

export class Dashboard extends Component {
  render() {
    let userName = this.props.location.namaUser;
    return (
      <div>
        <h2>location: {`${userName}`}</h2>
      </div>
    );
  }
}

export default Dashboard;
