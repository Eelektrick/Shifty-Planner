import React from "react";
import "./style.css";

function Schedule() {
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
          Today's Schedule
        </h4>
        <div
          className="container"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <div classNane="col sm-12" id="table"></div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
