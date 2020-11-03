import React, { useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Schedule(props) {
  const { user } = useAuth0();
  const [avdEvents, setavdEvents] = useState([]);
  const authID = user.sub;
  // {!avdEvents.length> 0 && setavdEvents(props.avdEvents)}
  // console.log("props.avdEvents");
  // console.log(props.avdEvents);
  // setavdEvents(props.avdEvents);
   useEffect(() => {
   
     setavdEvents(props.avdEvents);
     });

  // const handleReject = (id, authId) => {
  //   console.log(id);
  //   const newList = props.avdEvents.filter((e) => e.approvedPersonsAuthID !== authId);
   
  //   API.saveID(id, authId).then((data) => { });
  //   setavdEvents(newList);
  //   // API.getShifts(authId);

  // };

  const handleReject = (avdAuthid, myId) => {
    // console.log(myId);
    const newList = props.avdEvents.filter((e) => e.approvedPersonsAuthID !== avdAuthid);
   
    // API.saveID(id, authId).then((data) => { });
    API.saveRejectID(avdAuthid, myId).then((data) => { });
    setavdEvents(newList);
    // API.getShifts(authId);

  };

  // {!avdEvents.length> 0 && setavdEvents(props.avdEvents)}

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
          style={{ height: "300px", overflow: "scroll", paddingBottom: "10px" }}
        >
          <div className="row">
         
          {/* {!avdEvents.length> 0 && setavdEvents(props.avdEvents)} */}
          
            {avdEvents.map((details) => (
              <>
                <div className="card">
                  <div className="card-body">
                    Your Details : <br />

                    Name : {details.myName}<br />
                    Shift : {details.myShift}  <br />
                    Date  : {details.myDate}   <br />
                    Time  : {details.myTime}

                    <h5 class="card-title">Name : {details.approvedPersonsName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Shift : {details.approvedPersonsShift}
                    </h6>
                    <div className="card-text">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
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
                        <li class="list-group-item">
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
                      class="btn btn-dark mr-3"
                      // onClick={}
                      id="btn1"
                    >
                      Accept
                  </button>
                    <button
                      type="button"
                      // onClick={() => handleReject(details.myId, details.approvedPersonsAuthID)}
                      onClick={() => handleReject(details.approvedPersonsAuthID, details.myId)}
                      class="btn btn-dark"
                      id="btn2"
                    >
                      Reject
                  </button>
                  </div>
                </div>
              </>
            ))};
      </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
