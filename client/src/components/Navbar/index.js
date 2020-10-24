import React, { Component } from "react";
import "./style.css";
import { FaHome } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const show = this.state.menu ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" id="shifty" to="/">
          Shifty Planner
        </a>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + show}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a
                style={{ color: "rgb(190, 147, 3)" }}
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <FaHome style={{ color: "rgb(190, 147, 3)" }} /> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "rgb(190, 147, 3)" }}
                to="/portfolio"
                className={
                  window.location.pathname === "/schedule"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <GrSchedules style={{ color: "rgb(190, 147, 3)" }} /> Schedule
              </a>
            </li>
            <li className="nav-item">
              <a
                style={{ color: "rgb(190, 147, 3)" }}
                className={
                  window.location.pathname === "/license"
                    ? "nav-link active"
                    : "nav-link"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineSafetyCertificate
                  style={{ color: "rgb(190, 147, 3)" }}
                />{" "}
                License
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
