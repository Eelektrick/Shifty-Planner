import React, { useState, useEffect } from "react";
import API from "../utils/API";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import "./example.css";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Table from "../components/Table";
import { Tabs, Tab } from "react-bootstrap";
// import Table from "../Table";

function HomePage() {
  const [details, setDetails] = useState([]);
  const [events, setEvents] = useState([]);
  const [avdEvents, setAvdEvents] = useState([]);
  const { user } = useAuth0();
  const authID = user.sub;
  // console.log("AuthId");
  // console.log(authID);
  const nickname = user.nickname.split(".").join(" ");

  useEffect(() => {
    API.getShiftByAuthId(authID).then((data) => {
      // const dataArr = [data.data];
      setDetails(data.data);
    });

    API.getShifts(authID).then((data) => {
      const e = [];
      for (var i = 0; i < data.data.length; i++) {
        //Retrieve the details whose traded = 2 and not their own traded details
        if (data.data[i].traded === 2 && data.data[i].authID !== authID) {
          e[i] = {
            shift: data.data[i].shift,
            title: data.data[i].shift + "   " + data.data[i].name,
            date: moment(data.data[i].start).format("MMMM Do YYYY"),
            time:
              moment(data.data[i].start).format(" HH:mm:ss") +
              " - " +
              moment(data.data[i].end).format("HH:mm:ss"),
            _id: data.data[i]._id,
            authID: data.data[i].authID,
            name: data.data[i].name,
            traded: data.data[i].traded,
          };
        }
      }

      setEvents(e);
      console.log(e);
    });

    API.getAvdLists(authID).then((avdData) => {
      console.log("Approved Data Response foe API.getAvdLists(authID) ");
      console.log(avdData.data);

      const e = [];
      for (var i = 0; i < avdData.data.length; i++) {
        //Retrieve their own traded details
        for (var j = 0; j < avdData.data[i].approvedLists.length; j++) {
          if (avdData.data[i].authID === authID) {
            e[(i, j)] = {
              approvedPersonsShift: avdData.data[i].approvedLists[j].shift,
              approvedPersonsName: avdData.data[i].approvedLists[j].name,
              approvedPersonsAuthID: avdData.data[i].approvedLists[j].authID,
              approvedPersonsDate: avdData.data[i].approvedLists[j].date,
              approvedPersonsTime: avdData.data[i].approvedLists[j].time,
              myShift: avdData.data[i].shift,
              myName: avdData.data[i].name,
              myDate: moment(avdData.data[i].start).format("MMMM Do YYYY"),
              myTime:
                moment(avdData.data[i].start).format(" HH:mm:ss") +
                " - " +
                moment(avdData.data[i].end).format("HH:mm:ss"),
              myAuthId: avdData.data[i].authID,
              myTradeState: avdData.data[i].traded,
              myId: avdData.data[i]._id,
            };
          }
        }
      }

      setAvdEvents(e);
      console.log("Approved Events");
      console.log(e);
    });
  }, []);

  const title1 = "Trade Shifts";
  const title2 = "Accepted Shifts";
  const [key, setKey] = useState("home");
  return (
    <div>
      <div id="welcome"> Welcome {nickname} !! </div>
      <div className="container">
        <div className="tabs">
          <div className="col sm-12"></div>
          <Tabs
            defaultActiveKey="Trade"
            transition={false}
            onSelect={(k) => setKey(k)}
          >
            <Tab
              eventKey="Trade"
              title="Trade Shifts"
              style={{ fontFamily: "Kanit, sans-serif" }}
            >
              <div>
                <Table
                  name={nickname}
                  title={title1}
                  events={events}
                  details={details}
                />
              </div>
            </Tab>
            <Tab
              eventKey="Accepted"
              title="Accepted Shifts"
              style={{ fontFamily: "Kanit, sans-serif" }}
            >
              <div>
                <Schedule
                  name={nickname}
                  title={title2}
                  avdEvents={avdEvents}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
