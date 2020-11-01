import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import API from "../../utils/API";

class CalenderRefresher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      shift: "",
      interval:"",
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CalenderRefresher;
