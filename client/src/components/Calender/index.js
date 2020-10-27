import React, { Component } from "react";
import { Calendar, Views } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
// import Modal from '../Modal'
import Modal from "react-modal";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as dates from "../../utils/dates";
import "./style.css";
import { Notification } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/nextjs-material-dashboard-pro/components/buttonStyle.js";

const localizer = momentLocalizer(moment);
// const useStyles = makeStyles(styles);

let allViews = Object.keys(Views).map((k) => Views[k]);

var begin = moment().startOf("month");

const events = [];

for (var i = 0; i < moment().daysInMonth(); i++) {
  var j = i % 6;

  if (j === 0 || j === 1) {
    events[i] = {
      shift: "A",
      title: "A",
      start: moment(begin).add(i, "days").toDate(),
      end: moment(begin).add(i, "days").toDate(),
    };
  } else if (j === 2 || j === 3) {
    events[i] = {
      shift: "B",
      title: "B",
      start: moment(begin).add(i, "days").toDate(),
      end: moment(begin).add(i, "days").toDate(),
    };
  } else if (j === 4 || j === 5) {
    events[i] = {
      shift: "C",
      title: "C",
      start: moment(begin).add(i, "days").toDate(),
      end: moment(begin).add(i, "days").toDate(),
    };
  }
}

// const eventColors = (event) => {
//   var backgroundColor = "event-";
//   event.color
//     ? (backgroundColor = backgroundColor + event.color)
//     : (backgroundColor = backgroundColor + "default");
//   return {
//     className: backgroundColor,
//   };
// };

const eventStyleGetter = (events, start, end, isSelected) => {
  // var backgroundColor = '#' + events.hexColor;
  var style = {
    // backgroundColor: backgroundColor,
    borderRadius: "0px",
    opacity: 0.8,
    // color: 'black',
    border: "0px",
    display: "block",
  };
  if (events.shift === "A") {
    style = { color: "yellow" };
  } else if (events.shift === "B") {
    style = { color: "red" };
  } else if (events.shift === "C") {
    style = { color: "white" };
  }

  return {
    style: style,
  };
};

class Calender extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      cal_events: [],
    };
  }

  componentDidMount() {
    console.log("mounted calander");
    Modal.setAppElement("body");
  }

  openNotfication() {
    Notification.open({
      title: "Notification",
      description:
        "Your shift trade successful done!! It will be notified to others too..",
    });
  }

  handleSelect = (event) => {
    //set model to true
    console.log("here");
    this.setState({
      modalIsOpen: true,
      cal_events: event,
    });
  };

  closeModal = () =>
    this.setState({
      modalIsOpen: false,
    });

  // handleShow = () => this.setState({
  //   modalIsOpen: true
  // });

  renderModal() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <h2>
            Shift Details:
            <button
              onClick={this.closeModal}
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <br />
            <br />
            Shift : {this.state.cal_events.shift} <br />
            Start :{" "}
            {moment(this.state.cal_events.start).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
            <br />
            End :{" "}
            {moment(this.state.cal_events.end).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
            <br />
          </h2>
          <div>Please Click on the below button to trade your shift</div>
          <form onSubmit={this.onFormSubmit}>
            <button type="button btn-primary">Click Me!</button>
          </form>
        </Modal>
      </div>
    );
  }

  render() {
    console.log(events);
    return (
      <div>
        <Calendar
          selectable
          events={events}
          views={allViews}
          onSelectEvent={this.handleSelect}
          defaultView="month"
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          localizer={localizer}
          eventPropGetter={eventStyleGetter}
        />
        {/* <button onClick={this.openModal}>Open Modal</button> */}
        {this.renderModal()}
      </div>
    );
  }
}

export default Calender;
