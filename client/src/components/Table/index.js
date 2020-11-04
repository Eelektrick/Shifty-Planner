import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../../utils/API";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";

function Table(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownVal, setDropDownVal] = useState(' ');
  const [events, setEvents] = useState([]);
  const handleClose = () => setIsOpen(false);
  const { user } = useAuth0();
  const authID = user.sub;

  useEffect(() => {
    setEvents(props.events);
  });

  const handleDelete = (id) => {
    console.log(id);
    const newList = props.events.filter((e) => e._id !== id);
    //this.setState({...events, events: newList}) ;

    API.saveID(id, authID).then((data) => {});
    setEvents(newList);
  };

  const handleChange = (event, value) => {
    event.preventDefault();
    setDropDownVal(value);
  };

  const saveDetails = (event, details) => {
    event.preventDefault();
    // console.log("Details for saving");
    console.log("dropDownVal");
     console.log(dropDownVal);
    //  console.log(details);
    //  console.log(details._id);

    const value = dropDownVal.split("|");
    const avdDetails = {
      id: value[0],
      name: value[1],
      authID: authID,
      shift: value[2],
      date: value[3],
      time: value[4],
    };
    console.log("avdDetails");
    console.log(avdDetails);
    API.saveAvdDetails(details._id, avdDetails).then((data) => {});

    const traded = 3;
    API.updateShift(details._id, traded).then((response) => {
      console.log(response);
    });

    handleClose();
  };

  const MyModal = (props) => {
    // console.log(props.details);
    return (
      <Modal className="modal-container" {...props}>
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>
                    {" "}
                    Please select from your shift to swap with:
                  </Form.Label>

                  <Form.Control
                    as="select" value = {dropDownVal}
                    onChange={(e) => {
                      handleChange(e, e.target.value);
                    }}
                  >
                    {/* props.modalDetails */}
                    {props.modaldetails.map((detail) => (

                      <option>
                        {detail._id}
                        {"|"}
                        {detail.name}
                        {"|"}
                        {detail.shift}
                        {"|"}
                        {moment(detail.start).format("MMMM Do YYYY")}
                        {"|"}
                        {moment(detail.start).format(" HH:mm:ss ")} -{" "}
                        {moment(detail.end).format("HH:mm:ss ")}
                      </option>
                    ))}
                  </Form.Control>
                  <Button
                    type="submit"
                    id="submit"
                    onClick={(e) => {
                      saveDetails(e, props.tradepersonreqdetail);
                    }}
                  >
                    Submit
                  </Button>
                </Form.Group>
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
            fontSize: "22px",
          }}
        >
          {props.title}
        </h4>

        <div
          className="container"
          style={{ height: "400px", overflow: "scroll", paddingBottom: "10px" }}
        >
          <div className="row">
            {events.map((details) => (
              <>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Name : {details.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Shift : {details.shift}
                    </h6>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Date:{" "}
                          <div
                            style={{
                              color: "rgb(233, 173, 7)",
                              fontWeight: "bold",
                            }}
                          >
                            {details.date}
                          </div>
                        </li>
                        <li className="list-group-item">
                          Time :{" "}
                          <div
                            style={{
                              color: "rgb(233, 173, 7)",
                              fontWeight: "bold",
                            }}
                          >
                            {details.time}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="btn btn-dark mr-3"
                      onClick={() => setIsOpen(true)}
                      id="btn1"
                    >
                      Propose
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(details._id)}
                      className="btn btn-dark"
                      id="btn2"
                    >
                      Ignore
                    </button>
                  </div>
                </div>
                <MyModal
                  modaldetails={props.details}
                  tradepersonreqdetail={details}
                  show={isOpen}
                  onHide={() => setIsOpen(false)}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
