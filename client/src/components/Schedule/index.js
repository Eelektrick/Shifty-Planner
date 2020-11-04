import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Schedule(props) {
  const { user } = useAuth0();
  const [avdEvents, setavdEvents] = useState([]);
  // const authID = user.sub;
  useEffect(() => {
    setavdEvents(props.avdEvents);
  });
  // console.log("props.avdEvents");
  // console.log(props.avdEvents);
  const handleReject = (avdAuthid, myId) => {
    const newList = props.avdEvents.filter(
      (e) => e._id !== myId
    );

    API.saveID(myId, avdAuthid).then((data) => {
      setavdEvents(newList);
      API.removefromAvd(myId, avdAuthid).then((data) => {
        API.updateShift(myId, 1);
        props.reload();
      })
    });
  };

  const handleAccept = (details) => {
    // console.log(details);
    let theirDetails = {
      authID: details.approvedPersonsAuthID,
      shift: details.approvedPersonsShift,
      traded: 4,
      name: details.approvedPersonsName
    }

    let myDetails = {
      authID: details.myAuthId,
      shift: details.myShift,
      traded: 4,
      name: details.myName
    }

    API.swapMyDetails(details.approvedPersonsId, myDetails).then(resp => {
      API.swapMyDetails(details.myId, theirDetails).then(response => {
        props.reload();
      });

    });
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
            fontFamily: "Kanit, sans-serif",
          }}
        >
          {props.title}
        </h4>
        <div
          className="container"
          style={{ height: "500px", overflow: "scroll", paddingBottom: "10px" }}
        >
          <div className="row">
            {avdEvents.map((details) => (
              <>
                <div className="card" id="acceptedCard">
                  <div className="card-header">
                    <h6>{details.myName}'s Shift Details : </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {" "}
                      Shift : {details.myShift}{" "}
                    </h6>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        Date :{" "}
                        <div
                          style={{
                            color: "rgb(233, 173, 7)",
                            fontWeight: "bold",
                          }}
                        >
                          {details.myDate}
                        </div>{" "}
                      </li>
                      <li className="list-group-item">
                        Time :{" "}
                        <div
                          style={{
                            color: "rgb(233, 173, 7)",
                            fontWeight: "bold",
                          }}
                        >
                          {details.myTime}
                        </div>
                      </li>
                    </ul>
                    <br />
                    <h6 className="card-title">
                      {details.approvedPersonsName}'s Shift Details :
                    </h6>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Shift : {details.approvedPersonsShift}
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
                            {details.approvedPersonsDate}
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
                            {details.approvedPersonsTime}
                          </div>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"

                      className="btn btn-dark mr-3"
                      class="btn btn-dark mr-3"
                      onClick={() => handleAccept(details)}
                      id="btn1"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handleReject(
                          details.approvedPersonsAuthID,
                          details.myId
                        )
                      }
                      className="btn btn-dark"
                      id="btn2"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </>
            ))}
            ;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;