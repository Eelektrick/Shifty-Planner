import React from "react";
import "./style.css";

function Schedule(props) {
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
                      // onClick={}
                      class="btn btn-dark"
                      id="btn2"
                    >
                      Ignore
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
