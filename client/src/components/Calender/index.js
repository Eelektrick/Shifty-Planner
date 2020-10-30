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
import "animate.css";
// import { Footer } from "rsuite";
import Footer from "../Footer";

const localizer = momentLocalizer(moment);
// const useStyles = makeStyles(styles);

let allViews = Object.keys(Views).map((k) => Views[k]);

const eventStyleGetter = (events, start, end, isSelected) => {
  // var backgroundColor = '#' + events.hexColor;

  var style = {
    // backgroundColor: backgroundColor,
    borderRadius: "0px",
    // opacity: 0.8,
    // color: 'black',
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

const dayPropGetter = (Date) => {};

class Calender extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      cal_events: [],
      events: [],
    };
  }

  componentDidMount() {
    // console.log("mounted calander");
    // Modal.setAppElement("body");
    API.getShifts().then((data) => {
      // console.log("My Data from db");
      // console.log(data.data);
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
    });
  }

  // openNotfication() {
  //   Notification.open({
  //     title: 'Notification',
  //     description:
  //       'Your shift trade successful done!! It will be notified to others too..'

  //   });
  // }

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
    //set model to true
    // console.log("here");
    this.setState({
      modalIsOpen: true,
      cal_events: event,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
 
    console.log("Handle Submit Events");
    console.log(this.state.cal_events);

    API.updateShift(this.state.cal_events._id).then((response) => {
      console.log(response);
    });
   
  };

  closeModal = () =>
    this.setState({
      modalIsOpen: false,
    });

  // handleShow = () => this.setState({
  //   modalIsOpen: true
  // });

  renderModal(props){
    return (
        <Modal
         className="modal-container"
         show= {this.state.modalIsOpen}
         onHide = {this.closeModal}
        >
           <>
                <Modal.Header closeButton>
                <Modal.Title> Shift Details:</Modal.Title>
                </Modal.Header>
                <Modal.Body>

            Shift : {this.state.cal_events.shift} <br />
           Date/Time :  {moment(this.state.cal_events.start).format("MMMM Do YYYY")} 
                        {" - "}
                        {moment(this.state.cal_events.start).format(" HH:mm:ss ")} to{" "}
                        {moment(this.state.cal_events.end).format("HH:mm:ss ")} <br/>
      
          <div>Please Click on the below button to trade your shift</div>
          </Modal.Body>
          </>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
                    Close
                </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
                    Trade
          </Button>
          </Modal.Footer> 
          <ReactNotification />
        
        </Modal>
     
    );
  }

  render() {
    // console.log(events);
    return (
      <div>
        <div
          className="container"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.774)" }}
        >
          <Calendar
            selectable
            events={this.state.events}
            views={allViews}
            onSelectEvent={this.handleSelect}
            defaultView="month"
            scrollToTime={new Date(1970, 1, 1, 6)}
            defaultDate={new Date()}
            localizer={localizer}
            eventPropGetter={eventStyleGetter}
            // dayPropGetter ={dayPropGetter}
          />
          {/* <button onClick={this.openModal}>Open Modal</button> */}
          {/* {this.renderModal()}  show={this.state.modalIsOpen} onHide={() => this.closeModal}*/}
          { this.renderModal() }
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Calender;
