import React from "react";
// import { Button, Form, Col } from "react-bootstrap";
import API from "../../utils/API";
import moment from "moment";

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
      shift: "A",
      newShiftVar: [],
      aPIres: "",
      shiftsToBeAdded: [],
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeShift = this.handleChangeShift.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
    this.handleSubmitMonth = this.handleSubmitMonth.bind(this);
    this.handleSubmitShift = this.handleSubmitShift.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
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

  // /* -------------SHIFT----------------------------------- */////////////////////
  handleChangeShift(event) {
    

    event.preventDefault();
  }

  handleSubmitShift(event) {
    

    API.getUsersByShift(this.state.shift)
      .then((res) => {
        this.setState({ aPIres: res });
       
      })
      .then(() => {
        let userByShift = this.state.aPIres.data;
        console.log(userByShift);
        let begin = moment().startOf("month");
        let shift = [];
        for (var i = 0; i < begin.daysInMonth(); i++) {

        switch (this.state.shift) {
          case "A":
            for (let e = 0; e < userByShift.length; e++) {
          // console.log("A");
          var j = i % 6;
          if (j === 0 || j === 1) {
            shift.push({
              // 'generated_ID': 
              'authID': userByShift[e].authID,
              'emailID': userByShift[e].emailID,
              'shift': 'A',
              'start': moment(begin).add(i, 'days').hours('07').toDate(),
              'end': moment(begin).add(i, 'days').hours('19').toDate(),
              'traded': 1,
              'name' : userByShift[e].name,
              'approvedLists': [],
              'ignoredLists' : []
            })}
            
          }
          // console.log("shift");
          // console.log(shift);
            
          case "B":
            
          case "C":
            
        }}

        this.setState({ newShiftVar: shift });
        console.log(this.state.newShiftVar);
      });

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
  handleGenerate() {
    API.saveShift(this.state.newShiftVar)
    
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
        <form onSubmit={this.handleGenerate}>
          <h2>Generate!</h2>
          <label>
            <div>Submit all</div>
          </label>
          <input type="submit" value="DO NOT PUSH THE BUTTON" />
        </form>
      </div>
    );
  }
}

export default CalenderRefresher;
