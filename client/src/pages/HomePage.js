import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../utils/API";
import moment from "moment";
// import Footer from "../components/Footer";
import "./example.css";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";

function HomePage() {
  // constructor() {
  //     super();
  // this.state = {
  //     showModal: false,
  //     events: [],

  // }
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [events, setEvents] = useState([]);
  const userId = "abc";
  const authID = 456;
  // const traded =1;
  // }
  const handleClose = () =>  setIsOpen(false);
  // const handleShow = () =>  setIsOpen(true);

  useEffect(() => {
    API.getShiftByAuthId(authID).then((data) => {
      console.log("Get data by Auth Id");
      console.log(data.data);
      const dataArr = [data.data]
      console.log(dataArr);
      setDetails(data.data)
    });

    API.getShifts(userId).then((data) => {
      const e = [];
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].traded === 2 && (data.data[i].authID !== authID)) {
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
      }

      setEvents(e);
    });
  }, []);

  const handleDelete = (id) => {
    const newList = events.filter((e) => e._id !== id);
    //    this.setState({...events, events: newList}) ;
    setEvents(newList);
    // Save this new list to DB or remove that particular Id details from db
    // After refresh all the removed items still exist
    API.saveID(id, userId).then((data) => {});
  };

   const saveDetails = () => {
    handleClose();
   }

  const MyModal = (props) => {
    return (
        <Modal 
          className="modal-container"
        //   show={isOpen}
        //   onHide={() => setIsOpen(false)}
        {...props}
       >
            <div>
                <Modal.Header closeButton>
                <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <div>
                      
                       <Form>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label> Please select from your shift to swap with:</Form.Label>
                          <Form.Control as="select">
                          {details.map(detail => (
                            <option> {detail.shift}   
                            {"-"}
                            {moment(detail.start).format("MMMM Do YYYY")} 
                            {"-"}
                               {moment(detail.start).format(" HH:mm:ss ")} to{" "}
                               {moment(detail.end).format("HH:mm:ss ")}</option>
                            ))}
                          </Form.Control>
                        </Form.Group>

                        <Button type="submit" onClick={saveDetails}>Submit</Button>
                        </Form>
                   </div>
                </Modal.Body>
            </div>
        </Modal>

    );
  };

  return (
    <div>
      <div id="cover">
        <h4
          style={{
            textAlign: "left",
            color: "black",
            marginBottom: "20px",
            fontSize: "22px",
          }}
        >
          Trade Shifts
        </h4>
        <div
          className="container"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <div classNane="col sm-12" id="table">
            <table class="table table-fix table-hover table-responsive">
              <thead>
                <tr style={{ backgroundColor: "#dedb0d" }}>
                  <th class="col-xs-2">ID.</th>
                  <th class="col-xs-2">Name</th>
                  <th class="col-xs-2">Team</th>
                  <th class="col-xs-2">Time</th>
                  <th class="col-xs-2">Date</th>
                  <th class="col-xs-2">Status</th>
                </tr>
              </thead>
              {events.map((details) => (
                <tbody>
                  <tr>
                    <td class="col-xs-2" key={details._id}></td>
                    <td class="col-xs-2"> {details.name}</td>
                    <td class="col-xs-2"> {details.shift}</td>
                    <td class="col-xs-2">
                      {" "}
                      {moment(details.start).format("MMMM Do YYYY")}
                    </td>
                    <td class="col-xs-2">
                      {" "}
                      {moment(details.start).format(" HH:mm:ss ")} to{" "}
                      {moment(details.end).format("HH:mm:ss ")}
                    </td>

                    <td class="col-xs-2">
                      <button
                        type="button"
                        class="btn btn-dark mr-3"
                        onClick={() => setIsOpen(true)}
                        id="btn1"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(details._id)}
                        class="btn btn-dark"
                        id="btn2"
                      >
                        Ignore
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
              <MyModal show={isOpen} onHide={() => setIsOpen(false)} />
            </table>
          </div>
        </div>
      </div>
      <Schedule />
      <Footer />
    </div>
  );
}

export default HomePage;