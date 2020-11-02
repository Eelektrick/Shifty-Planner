import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";
import API from "../../utils/API";



class CalenderRefresher extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        authID: "",
        emailID: "",
        shift: "",
        start: 0,
        end: 0,
        traded: 1,
        name : "",
        ignoredLists : []
    };
  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeTime = this.handleChangeTime.bind(this);
      this.handleSubmitName = this.handleSubmitName.bind(this);
      this.handleSubmitTime = this.handleSubmitTime.bind(this);
    }
  

// /* -------------SHIFT----------- */
    handleChangeTime(event) {
      this.setState({value: event.target.value});
      event.preventDefault();
    }
    handleSubmitTime(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
///* ---------------NAME------------- */
    handleChangeName(event) {
      this.setState({name: event.target.value});
      console.log(this.state.name);
    }
    handleSubmitName(event) {
      alert('A name was submitted: ' + this.state.value);

      



      event.preventDefault();
    }
///* ---------Final Gen-------------- */
    handleSubmit(event){
      alert("WHY DID YOU PUSH THE BUTTON");
    }
  //---------------------------------------------------
    render() {
      return (
        <div>
          {/* -------------SHIFT----------- */}
        <form onSubmit={this.handleSubmit}>
          <h2>Shift to be made</h2>
          <label>
           Shift:
            <input type="text" value={this.state.start} onChange={this.handleChangeTime} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* ---------------NAME------------- */}
        <form onSubmit={this.handleSubmit}>
        <h2>Personnel on the shift </h2>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmit}>
          {/* ---------Final Gen-------------- */}
        <h2>Generate!</h2>
          <label>
            <div>Submit all   </div>
          </label>
          <input type="submit" value="DO NOT PUSH THE BUTTON" />
        </form>
        </div>
      );
    }
  
}

export default CalenderRefresher;


