import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
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
  const [events, setEvents] = useState([]);
  const userId = "abc";
  const authID = 456;
  // }
  // const handleClose = () =>  setIsOpen(false);
  // const handleShow = () =>  setIsOpen(true);

  useEffect(() => {
    API.getShiftByAuthId(authID).then((data) => {
      console.log("Get data by Auth Id");
      console.log(data);
    });

    API.getShifts(userId).then((data) => {
      const e = [];
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].traded === 2) {
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
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" onClick={props.onHide}>
              Save Changes
            </Button>
          </Modal.Footer>
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
            fontSize: "22px",
          }}
        >
          Trade Shifts
        </h4>

        <div
          className="container"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <div className="row">
            {events.map((details) => (
              <div className="card">
                <div className="card-body" style={{ height: "14rem" }}>
                  <h5 className="card-title">Name : {details.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Shift : {details.shift}
                  </h6>
                  <p className="card-text">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        Date:{" "}
                        <p style={{ color: "blue", fontWeight: "bold" }}>
                          {moment(details.start).format("MMMM Do YYYY")}
                        </p>
                      </li>
                      <li class="list-group-item">
                        Time :{" "}
                        <p style={{ color: "blue", fontWeight: "bold" }}>
                          {moment(details.start).format(" HH:mm:ss")} -{" "}
                          {moment(details.end).format("HH:mm:ss")}
                        </p>
                      </li>
                    </ul>
                  </p>
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
                    onClick={() => this.handleDelete(details._id)}
                    class="btn btn-dark"
                    id="btn2"
                  >
                    Ignore
                  </button>
                </div>
              </div>
            ))}
            <MyModal show={isOpen} onHide={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
      <Schedule />
      <Footer />
    </div>
  );
}

export default HomePage;
