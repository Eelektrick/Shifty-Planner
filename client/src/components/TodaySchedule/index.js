import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";

function TodaySchedule(){
    const [todayShift, setTodayShift] = useState([]);
    useEffect(() => {
        
        const start = moment().startOf('hour').hours('07').toDate();
        API.getShiftByDate(start, uuidv4()).then((data) => {
          // console.log("data");
          // console.log(data.data[0]);
        setTodayShift(data.data[0]);
        });
      }, []);

      function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

      // console.log("todaysShift");
      // console.log(todayShift);
      
    return(
        
       <div style={{color:'white'}}>
        Name: {todayShift.name} <br/>
        Shift: {todayShift.shift} <br/>
        Date: {moment(todayShift.start).format("MMMM Do YYYY")} <br/>
        Time:  {moment(todayShift.start).format(" HH:mm:ss") +
              " - " +
              moment(todayShift.end).format("HH:mm:ss")}


       </div>

    );
}

export default TodaySchedule;