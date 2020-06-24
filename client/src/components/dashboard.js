import React, { Component } from "react";

export default class dashboard extends Component {
  state = {
    user: "",
    name: "",
    persons: ["email", "name", "password"],
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    const name = localStorage.getItem("name");
    const persons = localStorage.getItem("persons");
    this.setState({
      user: user,
      name: name,
      persons: persons,
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-6 m-auto">
          <div className="card card-body">
            <h1 className="text-center mb-3"> Dashboard</h1>
            <br />
            <h1 className="lead mb-3">
              Welcome <span> </span>
              <strong>{this.state.user}</strong>
            </h1>
            <br />
            <br />
            <a className="btn btn-danger btn-block" href="/login">
              Logout{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
