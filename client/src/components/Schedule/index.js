import React from "react";
import "./style.css";
import API from "../../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Schedule(props) {
  const { user } = useAuth0();
  const authID = user.sub;

  const handleReject = (id) => {
    console.log(id);
    const newList = props.avdEvents.filter((e) => e._id !== id);
    //this.setState({...events, events: newList}) ;
    // setEvents(newList);
    API.saveID(id, authID).then((data) => { });
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
          style={{ height: "300px", overflow: "scroll", paddingBottom: "10px" }}
        >
          <div className="row">

            {props.avdEvents.map((details) => (
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
                      onClick={() => handleReject(details.myId)}
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
