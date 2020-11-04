import React from "react";
import "./style.css";
import image from "./firstressym.png";

function Footer() {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <img src={image} width="180" height="60" alt="firstReslogo" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>National Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://nasemso.org/">National Accociation of State EMS Officials</a>
                  </li>
                  <li>
                    <a href="https://www.nremt.org/">National Registry of EMTs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Local Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.spanishfork.org/departments/public_safety/police.php">Police Department</a>
                  </li>
                  <li>
                    <a href="https://www.spanishfork.org/departments/public_safety/fire.php">Fire</a>
                  </li>
                  <li>
                    <a href="https://www.spanishfork.org/government/mayor_and_city_council/index.php">Mayor and City Council</a>
                  </li>
                  <li>
                    <a href="https://www.spanishfork.org/departments/public_safety/ambulance.php">EMT</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Contact Us</h4>
              <a href="mailto: shiftyplanner@gmail.com">
                shiftyplanner@gmail.com
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy;2020 Copyright Shifty Planner : Sam Greilick, Yakini
                Arumuga Kani ,Corey Post and Atima Bennett
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;