import React, { Component } from "react";
import "./style.css";
import { FaHome } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import image from "../Navbar/shiftyLogo3.png";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutButton";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
  }
  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleMenu();
    }
  }

  render() {
    const show = this.state.menu ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <a className="navbar-brand" href="#" />
        <img src={image} width="70" height="60" alt="logo" />
        <a
          className="navbar-brand"
          id="shifty"
          to="/"
          style={{ fontFamily: "Kanit, sans-serif", fontSize: "25px" }}
        >
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
              <Link
                onClick={this.closeNavbar}
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
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.closeNavbar}
                style={{ color: "rgb(190, 147, 3)" }}
                to="/scheduler"
                className={
                  window.location.pathname === "/scheduler"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <AiFillSchedule style={{ color: "rgb(190, 147, 3)" }} />{" "}
                Schedule
              </Link>
            </li>

            {this.props.isAdmin&&<li className="nav-item">
            <Link
                onClick={this.closeNavbar}
                style={{ color: "rgb(190, 147, 3)" }}
                to="/admin"
                className={
                  window.location.pathname === "/admin"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Admin
              </Link>
            </li>}

            <li className="nav-item">
              <LogoutButton onClick={this.closeNavbar} />
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