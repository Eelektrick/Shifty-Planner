import React, { Component } from "react";
import LoginButton from "./LoginButton";
import "./style.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container login-box">
        <div className="row">
          <div
            className="Col md6"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.781)",
              border: "solid 2px lightGray",
              padding: "30px",
              borderRadius: "10px",
              boxShadow:
                "0 4px 5px rgba(0, 0, 0, 0.12), 2px 2px 4px rgba(0, 0, 0, 0.24)",
            }}
          >
            <div
              className="col-md-12 login-title"
              style={{ color: "rgb(190, 147, 3)" }}
            >
              LOG IN
            </div>
            <form>
              <div className="form-group">
                <label for="form-control-label m-0">Username</label>
                <input type="text" class="form-control" />
              </div>
              <div className="form-group">
                <label for="form-control-label  m-0">Password</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group">
                <label for="form-control-label  m-0">Agency</label>
                <input type="password" className="form-control" />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <LoginButton />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
