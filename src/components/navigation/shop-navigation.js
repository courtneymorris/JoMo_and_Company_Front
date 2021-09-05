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
        <div className="nav-link-wrapper">
          <NavLink to="/products/scrunchies" activeClassName="nav-link-active">
            Scrunchies
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/products/earrings" activeClassName="nav-link-active">
            Earrings
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/products/charms" activeClassName="nav-link-active">
            Charms
          </NavLink>
        </div>
      </div>
    );
  }
}
