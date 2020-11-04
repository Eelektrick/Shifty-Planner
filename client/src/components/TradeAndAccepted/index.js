import React, { useState } from "react";

// import "./App.css";
import { Tabs, Tab } from "react-bootstrap";
import Table from "../Table";

function TradeAndAccepted() {
  const [key, setKey] = useState("home");

  return (
    <div className="container">
      <div className="tabs">
        <div className="col sm-12"></div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab
            eventKey="Trade Shifts"
            title="Trade Shifts"
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            <h4> Trade Shifts</h4>
            <div>
              <Table />
            </div>
          </Tab>
          <Tab
            eventKey="Accepted Shifts"
            title="Accepted Shifts"
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            <h4> Accepted Shifts</h4>
            <div></div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default TradeAndAccepted;
