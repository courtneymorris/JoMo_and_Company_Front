import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <div className="nav-link-wrapper">
          <NavLink to="/shop" activeClassName="nav-link-active">
            Shop Online
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/in-person" activeClassName="nav-link-active">
            Shop In Person
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}
