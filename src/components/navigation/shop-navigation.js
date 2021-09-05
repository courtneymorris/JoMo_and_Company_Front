import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
  constructor(props) {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink to="/" activeClassName="nav-link-active">
              Shop
            </NavLink>
          </div>

          <div className="right-side">
            <div className="nav-link-wrapper">
              <NavLink to="/about" activeClassName="nav-link-active">
                About
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink to="/in-person" activeClassName="nav-link-active">
                Shop In Person
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
