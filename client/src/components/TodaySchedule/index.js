import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import {default as UUID} from "uuid";  

const TodaySchedule = () =>{
    const [todayShift, setTodayShift] = useState([]);
    
    useEffect(() => {
        
        const start = moment().startOf('hour').hours('07').toDate();
        API.getShiftByDate(start, UUID.v4()).then((data) => {
          // console.log("data");
          // console.log(data.data[0]);
        setTodayShift(data.data[0]);
        });
      }, []);

    return(
      <>
       <div style={{color:'white'}}>
        Name: {todayShift.name} <br/>
        Shift: {todayShift.shift} <br/>
        Date: {moment(todayShift.start).format("MMMM Do YYYY")} <br/>
        Time:  {moment(todayShift.start).format(" HH:mm:ss") +
              " - " +
              moment(todayShift.end).format("HH:mm:ss")}
       </div>
       </>
    );
}

export default TodaySchedule;