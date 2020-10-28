import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="mainfooter" role="contentinfo">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-pad">
                <h4>Shifty Planner</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Schedule</a>
                  </li>
                  <li>
                    <a href="#">License</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-pad">
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Website 1</a>
                  </li>
                  <li>
                    <a href="#">Website 2</a>
                  </li>
                  <li>
                    <a href="#">Website 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-pad">
                <h4>Department</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Police Department</a>
                  </li>
                  <li>
                    <a href="#">Fire</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright 2020 - Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
