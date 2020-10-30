import React from "react"
import {Button} from "react-bootstrap"
import API from "../utils/API"


import Refresh from "../components/CalendarRefresher"

//Test env for refresher






//Auth for Yakini, added 10/30
const authID = "123"
function getByAuth() {
  API.getShiftByAuthId(authID).then( (data) => {
    console.log(data);
  })
};


function example(params) {
  return(
    <div>
    <Refresh/>

    <Button onClick={getByAuth}>Get Shifts By Auth (check the consol)</Button>

    </div>
  )
}


export default example;


