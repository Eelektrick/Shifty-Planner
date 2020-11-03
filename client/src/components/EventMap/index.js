import React, { useState} from "react";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function EventMap(props){
    const { user } = useAuth0();
    const authID = user.sub;

  const handleReject = (id, authId) => {
    console.log(id);
    const newList = props.avdEvents.filter((e) => e._id !== id);
    //this.setState({...events, events: newList}) ;
    setavdEvents(newList);
    API.saveID(id, authId).then((data) => { });
    API.getShifts(authId);
    // API.saveRejectID(authID, id).then((data) => { });
  };


    return(
      setavdEvents(props.avdEvents),
     <>
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
                    onClick={() => handleReject(details.myId, details.approvedPersonsAuthID)}
                    class="btn btn-dark"
                    id="btn2"
                  >
                    Reject
                </button>
                </div>
              </div>
            </>
          ))
        }
     </>
    )
}

export default EventMap;