import React, { Component } from 'react'
import { Calendar, Views } from 'react-big-calendar'
import { momentLocalizer } from 'react-big-calendar'
// import Modal from '../Modal'
import Modal from "react-modal";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from '../../events'
import * as dates from '../../utils/dates'
import "./style.css"

// import { makeStyles } from "@material-ui/core/styles";
// import styles from "assets/jss/nextjs-material-dashboard-pro/components/buttonStyle.js";


const localizer = momentLocalizer(moment);
// const useStyles = makeStyles(styles);

 let allViews = Object.keys(Views).map(k => Views[k])

const eventColors = (event) => {
  var backgroundColor = "event-";
  event.color
    ? (backgroundColor = backgroundColor + event.color)
    : (backgroundColor = backgroundColor + "default");
  return {
    className: backgroundColor,
  };
};

class Calender extends Component{
constructor() {
  super();
  this.state = {
    // currentMonth: new Date(),
    // selectedDate: new Date(),
    // dropDownSelection: "Java 1",
    modalIsOpen: false,
    cal_events: []
  };
}
componentDidMount() {
  console.log("mounted calander");
  Modal.setAppElement("body");
}

// onchangeSelectDropdown = e => {
//   this.setState({
//     dropDownSelection: e
//   });
// };

handleSelect = event => {
  //set model to true
  // console.log(event);
  this.setState({
    modalIsOpen: true,
    cal_events : event
  });
 
};

closeModal = () => this.setState({
  modalIsOpen: false
});

// handleShow = () => this.setState({
//   modalIsOpen: true
// });

renderModal() {

  console.log(this.state.cal_events.title);
  console.log(this.state.cal_events.start);
  console.log(this.state.cal_events.end);
  // const title= this.state.cal_events.title;
  // const start= this.state.cal_events.start;
  // const end= this.state.cal_events.end;

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
        <button  onClick={this.closeModal} data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> <br/><br/>
       
          Title : {this.state.cal_events.title} <br/>
          StartTime : {moment(this.state.cal_events.start).format('MM/DD/YYYY, h:mm:ss a')} <br/>
          EndTime : {moment(this.state.cal_events.end).format('MM/DD/YYYY, h:mm:ss a')} <br/> 
   
        </h2>
       
        <div>Please Click on the below button to trade your shift</div><br/>
        <form onSubmit={this.onFormSubmit}>
 
        <button type="button btn-primary">Click Me!</button>

        </form>
      </Modal>
    </div>
  );
}

render(){
return(
     <div>
      <Calendar
        selectable
        events={events}
        views={allViews}
        onSelectEvent = {this.handleSelect}
        defaultView="month"
        scrollToTime={new Date(1970, 1, 1, 6)}
        defaultDate={new Date()}
        localizer={localizer}
        eventPropGetter={eventColors}
      />
      {/* <button onClick={this.openModal}>Open Modal</button> */}
        {this.renderModal()}
        
      </div>
    )}
}

export default Calender
