import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default class Navbar extends Component {
  render() {
    const { favorPage, tours, favorTours } = this.props;

    return (
      <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              home
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link ${favorPage ? null : "active"}`}
              onClick={tours}
            >
              tours
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link ${favorPage ? "active" : null}`}
              onClick={favorTours}
            >
              favorite
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
