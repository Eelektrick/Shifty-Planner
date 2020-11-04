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
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://nasemso.org/">
                      National Accociation of State EMS Officials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-pad">
                <h4>Heading 3</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Police Department</a>
                  </li>
                  <li>
                    <a href="#">Fire</a>
                  </li>
                  <li>
                    <a href="#">Mayor and City Council</a>
                  </li>
                  <li>
                    <a href="#"></a>
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
