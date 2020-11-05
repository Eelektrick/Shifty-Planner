import React, { Component } from "react";
import { Calendar, Views } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./style.css";
import API from "../../utils/API";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import emailjs from "emailjs-com";
import "animate.css";
import {Notification} from 'rsuite';
import HomePage from '../../pages/HomePage';
const localizer = momentLocalizer(moment);

let allViews = Object.keys(Views).map((k) => Views[k]);

let name= "";
const eventStyleGetter = (events, start, end, isSelected) => {
  // console.log(events.start);
  // console.log(events);
  if(moment(events.start).format("MMMM Do YYYY")=== moment().format("MMMM Do YYYY")){

    name = events.name;
  }
  var style = {
    // backgroundColor: backgroundColor,
    // opacity: 0.8,
    // color: 'black',
    borderRadius: "0px",
    border: "0px",
    display: "block",
  };
  if (events.shift === "A") {
    style = { color: "blue" };
  } else if (events.shift === "B") {
    style = { color: "red" };
  } else if (events.shift === "C") {
    style = { color: "green" };
  }

  return {
    style: style,
  };
};

console.log("name");
console.log(name);
const dayPropGetter = (Date) => { };

class Calender extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      cal_events: [],
      events: [],
      crewName: "",
    };
  }

  componentDidMount() {

    emailjs.init("user_BCfmpqcEj5v3szKGPYNTP");
    API.getShifts().then((data) => {
      const e = [];
      for (var i = 0; i < data.data.length; i++) {
        e[i] = {
          shift: data.data[i].shift,
          title: data.data[i].shift + "   " + data.data[i].name,
          start: data.data[i].start,
          end: data.data[i].end,
          _id: data.data[i]._id,
          authID: data.data[i].authID,
          name: data.data[i].name,
          traded: data.data[i].traded,
        };
      }
      this.setState({ events: e });
      // console.log(e);
    });
  }

   openNotfication() {
     Notification.open({
       title: 'Notification',
       description:
         'Your shift trade successful done!! It will be notified to others too..'

     });
   }

  handleOnclickTread = (event) => {
    event.preventDefault();
    store.addNotification({
      title: "Trade schedule",
      message: "Your schedule is now ready to be trade!",
      type: "info",
      container: "top-right",
      insert: "Top",
      animationIn: ["animate__animated", "animate__flipInY"],
      animationOut: ["animate__animated", "animate__flipOutY"],
      dismiss: {
        duration: 5000,
        showIcon: true,
        onScreen: true,
      },
    });
  };

  handleSelect = (event) => {

    const authID = this.props.authID;
    if (event.authID !== authID || event.traded !== 1 || moment(event.start).isBefore()) {
      alert('Sorry...You cannot make a trade for this!!!');
      return;
    }
    this.setState({
      modalIsOpen: true,
      cal_events: event,
      crewName: event.name,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      name: this.state.crewName,
    };
    // console.log("Handle Submit Events");
    // console.log(this.state.cal_events);
    const traded = 2;
    API.updateShift(this.state.cal_events._id, traded).then((response) => {
      // console.log(response);
    });

    // emailjs.send("shiftyPlannerEmail", "template_clhajc8", formData).then(
    //   function (response) {
    //     console.log("SUCCESS!", response.status, response.text);
    //   },
    //   function (error) {
    //     console.log("FAILED...", error);
    //   }
    // );

    this.closeModal();
  };

  closeModal = () =>
    this.setState({
      modalIsOpen: false,
    });

  renderModal(props) {
    return (
      <Modal
        className="modal-container"
        show={this.state.modalIsOpen}
        onHide={this.closeModal}
      >
        <>
          <Modal.Header closeButton>
            <Modal.Title> Shift Details:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Shift :{" "}
            <p style={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}>
              {this.state.cal_events.shift}
            </p>
            Date :{" "}
            <p style={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}>
              {moment(this.state.cal_events.start).format("MMMM Do YYYY")}
            </p>
            Time:{" "}
            <p style={{ color: "blue", fontWeight: "bold", fontSize: "17px" }}>
              {moment(this.state.cal_events.start).format(" HH:mm:ss ")} -{" "}
              {moment(this.state.cal_events.end).format("HH:mm:ss ")}
            </p>{" "}
            "Would you like to trade this shift?"
          </Modal.Body>
        </>
        <Modal.Footer>
          <Button variant="secondary" id="close" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" id="trade" onClick={this.handleSubmit}>
            Trade
          </Button>
        </Modal.Footer>
        <ReactNotification />
      </Modal>
    );
  }

  render() {
    return (
    
      <div id="calendarCover">
        <div id="welcome">
          {" "}
          Welcome {this.props.nickname.split(".").join(" ")} !!
        </div>
        <div
          className="container"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.774)" }}
        >
          <Calendar
            selectable
            events={this.state.events}
            views={["month"]}
            onSelectEvent={this.handleSelect}
            defaultView="month"
            defaultDate={new Date()}
            localizer={localizer}
            eventPropGetter={eventStyleGetter}
            dayPropGetter={dayPropGetter}
          />
          {/* <button onClick={this.openModal}>Open Modal</button> */}
          {/* {this.renderModal()}  show={this.state.modalIsOpen} onHide={() => this.closeModal}*/}
          {this.renderModal()}
        </div>
      </div>
     
    );
  }
}

export default Calender;