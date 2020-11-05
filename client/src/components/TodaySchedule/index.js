import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import {default as UUID} from "uuid";  
import "./style.css";

function TodaySchedule() {
  const [todayShift, setTodayShift] = useState([]);
  useEffect(() => {
    const start = moment().startOf("hour").hours("07").toDate();
    API.getShiftByDate(start, UUID.v4()).then((data) => {
      // console.log("data");
      // console.log(data.data[0]);
      setTodayShift(data.data[0]);
    });
  }, []);

  // console.log("todaysShift");
  // console.log(todayShift);

  return (
    <div>
      <div id="cover">
        <div
          className="container"
          style={{ height: "400px", overflow: "scroll", paddingBottom: "10px" }}
        >
          {" "}
          <h5
            style={{
              textAlign: "center",
              color: "black",
              marginBottom: "20px",
              fontSize: "22px",
              fontFamily: "Kanit, sans-serif",
            }}
          >
            {moment(todayShift.start).format("MMMM Do, YYYY")}
          </h5>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="card-header" id="head">
                  <h5 className="card-title"> Name: {todayShift.name}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item" id="infoHead">
                      {" "}
                      Shift: <div id="info">{todayShift.shift}</div>
                    </li>{" "}
                    <li className="list-group-item" id="infoHead">
                      Time:{" "}
                      <div id="info">
                        {moment(todayShift.start).format(" HH:mm") +
                          " - " +
                          moment(todayShift.end).format("HH:mm")}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaySchedule;
