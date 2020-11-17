import React from "react";
// import { Button, Form, Col } from "react-bootstrap";
import API from "../../utils/API";
import moment from "moment";
import "./style.css";


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
      selectedYear: 0,
      shift: "",
      newShiftVar: [],
      aPIres: "",
      shiftsToBeAdded: [],
      year: 0,
      month: 0,
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
    // this.setState({ selectedMonth: event.target.value });
    this.setState({ selectedMonth: event.target.value }, () => {
      console.log(this.state.selectedMonth);
    });

    event.preventDefault();
  }
  handleSubmitMonth(event) {
    console.log(this.state.selectedMonth);
    // this.setState({ selectedMonth: event.target.value });
    let selectedDate = moment(this.state.selectedMonth);
    this.setState({ month: selectedDate.get("month") }, () => {
      console.log(this.state.month);
    });
    this.setState({ year: selectedDate.get("year") }, () => {
      console.log(this.state.year);
    });
    event.preventDefault();
  }

  // /* -------------SHIFT----------------------------------- */////////////////////
  handleChangeShift(event) {
    this.setState({ shift: event.target.value }, () => {
      console.log(this.state.shift);
    });
    console.log(this.state.shift);
    event.preventDefault();
  }

  handleSubmitShift(event) {
    API.getUsersByShift(this.state.shift)
      .then((res) => {
        this.setState({ aPIres: res });
      })
      .then(() => {
        let userByShift = this.state.aPIres.data;
        let yearMonth = moment().set({
          year: 2020,
          month: this.state.selectedMonth,
        });
        let begin = moment(yearMonth).startOf("month");
        console.log(begin);
        let shift = [];
        for (var i = 0; i < begin.daysInMonth(); i++) {
          let j = i % 6;

          switch (this.state.shift) {
            case "A":
              for (let e = 0; e < userByShift.length; e++) {
                // console.log("A");

                if (j === 0 || j === 1) {
                  shift.push({
                    // 'generated_ID':
                    authID: userByShift[e].authID,
                    emailID: userByShift[e].emailID,
                    shift: "A",
                    start: moment(begin).add(i, "days").hours("07").toDate(),
                    end: moment(begin).add(i, "days").hours("19").toDate(),
                    traded: 1,
                    name: userByShift[e].name,
                    approvedLists: [],
                    ignoredLists: [],
                  });
                }
              }
              console.log(shift);
              break;
            // console.log("shift");
            // console.log(shift);

            case "B":
              for (let e = 0; e < userByShift.length; e++) {
                console.log("B");
                if (j === 2 || j === 3) {
                  shift.push({
                    // 'generated_ID':
                    authID: userByShift[e].authID,
                    emailID: userByShift[e].emailID,
                    shift: "B",
                    start: moment(begin).add(i, "days").hours("07").toDate(),
                    end: moment(begin).add(i, "days").hours("19").toDate(),
                    traded: 1,
                    name: userByShift[e].name,
                    approvedLists: [],
                    ignoredLists: [],
                  });
                }
              }

              break;

            case "C":
              for (let e = 0; e < userByShift.length; e++) {
                if (j === 4 || j === 5) {
                  shift.push({
                    // 'generated_ID':
                    authID: userByShift[e].authID,
                    emailID: userByShift[e].emailID,
                    shift: userByShift[e].shift,
                    start: moment(begin).add(i, "days").hours("07").toDate(),
                    end: moment(begin).add(i, "days").hours("19").toDate(),
                    traded: 1,
                    name: userByShift[e].name,
                    approvedLists: [],
                    ignoredLists: [],
                  });
                }
              }
              break;
            default:
              console.log("No shift found");
          }
        }

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
    API.saveShift(this.state.newShiftVar);
 
  }
  //---------------------------------------------------
  render() {
    return (
      <div>
      <div className="container" id="admin"> 
      <h3>Admin</h3>

          {/* -------------Month----------- */}
          <form onSubmit={this.handleSubmitMonth}>
            <h5
              style={{
          
              }}
            >
              Select Month:
            </h5>
            <label>
              Month:
              <input
                type="month"
                id="start"
                name="start"
                value={this.state.selectedMonth}
                onChange={this.handleChangeMonth}
                id="calendar"
                
              />
            </label>
            <input
              type="submit"
              value="Submit"
              id="submit1"
             
            />
          </form>
          <hr/>
          {/* -------------SHIFT----------- */}
          {/* <form  > */}
          {/* <h2>Shift to be made</h2>
          <label>
            Shift:
            <input
              type="text"
              value={this.state.shift}
              onChange={this.handleChangeShift}
            />
          </label>
          <input type="submit" value="Submit" />
        </form> */}

          <form onSubmit={this.handleSubmitShift}>
            <h5>
              Please select Shift:
            </h5>
            <input
              type="radio"
              id="A"
              name="shift"
              value="A"
              onChange={this.handleChangeShift}
            />
            <label> A</label>
            <br />
            <input
              type="radio"
              id="B"
              name="shift"
              value="B"
              onChange={this.handleChangeShift}
            />
            <label> B</label>
            <br />
            <input
              type="radio"
              id="C"
              name="shift"
              value="C"
              onChange={this.handleChangeShift}
            />
            <label> C</label>
            <br />
            <input type="submit" value="Submit" id="submit1" />
          </form>
          <hr/>
          {/* ---------------NAME------------- */}
          {/* <form onSubmit={this.handleSubmitName}>
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
        </form> */}

          {/* ---------Final Gen-------------- */}
          <form onSubmit={this.handleGenerate}>
            <br />
            <h5>Please click below to generate the shift!</h5>
            <input type="submit" value="Generate Shifts" id="submit1" />
          </form>
          <br />
        </div>
   
      </div>
    );
  }
}

export default CalenderRefresher;
