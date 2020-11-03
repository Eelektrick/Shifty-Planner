import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import API from "../utils/API";
import moment from "moment";
import { useAuth0 } from "@auth0/auth0-react";
import "./example.css";
import Schedule from "../components/Schedule";
import Footer from "../components/Footer";
import Table from "../components/Table";

function HomePage() {

  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [events, setEvents] = useState([]);
  const [avdEvents, setAvdEvents] = useState([]);
  const [dropDownVal, setDropDownVal] = useState();
  const { user } = useAuth0();
  const userInfo = user;
  const authID = user.sub;
  const nickname = user.nickname.split(".").join(" ");

  useEffect(() => {
    API.getShiftByAuthId(authID).then((data) => {
      const dataArr = [data.data];
      setDetails(data.data);
    });

    API.getShifts(authID).then((data) => {
      const e = [];
      for (var i = 0; i < data.data.length; i++) {
        //Retrieve the details whose traded = 2 and not their own traded details
        if ((data.data[i].traded === 2 || data.data[i].traded === 3) && data.data[i].authID !== authID) {
          e[i] = {
            shift: data.data[i].shift,
            title: data.data[i].shift + "   " + data.data[i].name,
            date:  moment(data.data[i].start).format("MMMM Do YYYY"),
            time: moment(data.data[i].start).format(" HH:mm:ss")+ " - " + moment(data.data[i].end).format("HH:mm:ss"),
            _id: data.data[i]._id,
            authID: data.data[i].authID,
            name: data.data[i].name,
            traded: data.data[i].traded,
          };
        }
      }

      setEvents(e);
    });

    API.getAvdLists(authID).then((avdData) => {
     console.log("Approved Data Response foe API.getAvdLists(authID) ");
     console.log(avdData.data);

      const e = [];
      for (var i = 0; i < avdData.data.length; i++) {
      //Retrieve their own traded details
       if (avdData.data[i].authID === authID) {
          e[i] = {
            approvedPersonsShift: avdData.data[i].approvedLists[i].shift,
            approvedPersonsName: avdData.data[i].approvedLists[i].name,
            approvedPersonsAuthID: avdData.data[i].approvedLists[i].authID,
            approvedPersonsDate: avdData.data[i].approvedLists[i].date,
            approvedPersonsTime: avdData.data[i].approvedLists[i].time,
            myShift: avdData.data[i].shift,
            myName: avdData.data[i].name,
            myDate: moment(avdData.data[i].start).format("MMMM Do YYYY"),
            myTime: moment(avdData.data[i].start).format(" HH:mm:ss")+ " - " + moment(avdData.data[i].end).format("HH:mm:ss"),
            myAuthId:  avdData.data[i].authID,
            myTradeState : avdData.data[i].traded,
            myId :  avdData.data[i]._id
          };
        }
      }

      setAvdEvents(e);
      console.log("Approved Events");
      console.log(e);
    });
   
  }, []);

  const title1= "Trade Shifts";
  const title2= "Accepted Shifts";
  return (
   
    <>
      <Table name={nickname} title={title1} events={events} details={details}/>
     
      <Schedule name={nickname} title={title2} avdEvents={avdEvents}/>
      <Footer />
      </>
  );
}

export default HomePage;
