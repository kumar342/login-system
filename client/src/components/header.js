import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-dark bg-primary"
          style={{ margin: "10px ", color: "#fff", justifyContent: "center" }}
        >
          <h1>Login system</h1>
        </nav>
      </div>
    );
  }
}
