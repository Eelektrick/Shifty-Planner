import React from "react";
// import { Button, Form, Col } from "react-bootstrap";
import API from "../../utils/API";

class CalenderRefresher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authID: "",
      emailID: "",
      start: "",
      end: "",
      traded: 1,
      name: "",
      ignoredLists: [],
      selectedMonth: 0,
      shift: "A"
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeShift = this.handleChangeShift.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
    this.handleSubmitMonth = this.handleSubmitMonth.bind(this);
    this.handleSubmitShift = this.handleSubmitShift.bind(this);
  }
   // /* -------------Month----------- */
   handleChangeMonth(event) {
    console.log(event);
    console.log(this.state.selectedMonth);
    this.setState({ selectedMonth: event.target.selectedMonth });
    console.log(this.state.selectedMonth);
    event.preventDefault();
  }
  handleSubmitMonth(event) {
    this.setState({ selectedMonth: event.target.selectedMonth });
    console.log(this.state.selectedMonth);

    event.preventDefault();
  }
  // /* -------------SHIFT----------- */
  handleChangeShift(event) {
    console.log(event);

    event.preventDefault();
  }
  handleSubmitShift(event) {
    console.log(this.state.shift);
    API.getUsersByShift(this.state.shift);
    event.preventDefault();
  }

  ///* ---------------NAME------------- */
  handleChangeName(event) {
    console.log(event);
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }
  handleSubmitName(event) {
    alert("A name was submitted: " + this.state.name);
    API.getUserByName(this.state.name);

    event.preventDefault();
  }
  ///* ---------Final Gen-------------- */
  handleSubmit() {
    alert("WHY DID YOU PUSH THE BUTTON");

    

  }
  //---------------------------------------------------
  render() {
    return (
      <div>
        {/* -------------Month----------- */}
        {/* <form onSubmit={this.handleSubmitMonth}>
          <h2>Date to be made</h2>
          <label>
            Month:
            <input
              type="month"
              id="start"
              name="start"
              min="2018-03"
              value={this.state.selectedMonth}
              onChange={this.handleChangeMonth}
            />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
        {/* -------------SHIFT----------- */}
        <form onSubmit={this.handleSubmitShift}>
          <h2>Shift to be made</h2>
          <label>
            Shift:
            <input
              type="text"
              value={this.state.shift}
              onChange={this.handleChangeShift}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* ---------------NAME------------- */}
        <form onSubmit={this.handleSubmitName}>
          <h2>Personnel on the shift </h2>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {/* ---------Final Gen-------------- */}
        <form onSubmit={this.handleSubmit}>
          <h2>Generate!</h2>
          <label>
            <div>Submit all </div>
          </label>
          <input type="button" value="DO NOT PUSH THE BUTTON" />
        </form>
      </div>
    );
  }
}

export default CalenderRefresher;
