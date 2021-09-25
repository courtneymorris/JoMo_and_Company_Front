import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="spacer" />
      <footer>
        <div className="social-wrapper">
          <a href="www.instagram.com/jomoandcompany">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <NavLink className="link-item" to="/home">
              Home
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="link-item" to="/shop">
              Products
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="link-item" to="/markets">
              Markets & Events
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="link-item" to="/about">
              About
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink className="link-item" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <p className="copyright">JoMo and Company © 2021</p>
      </footer>
    </div>
  );
}
