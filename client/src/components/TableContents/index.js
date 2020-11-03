import React, { useState, useEffect } from "react";

function TableContents(props){


return(

    <div
    className="container"
    style={{ height: "300px", overflow: "scroll", paddingBottom: "10px" }}
  >
    <div className="row">
      {props.events.map((details) => (
        <>
        <div className="card">
          <div className="card-body">
            <h5 class="card-title">Name : {details.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Shift : {details.shift}
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
                    {details.date}
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
                    {details.time}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                  </>
                  ))};
    </div>
    </div>

)
}

export default TableContents;