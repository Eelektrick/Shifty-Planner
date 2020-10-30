import React from "react"
import {Button} from "react-bootstrap"
import API from "../utils/API"

const authID = "123"

function getByAuth() {
  API.getShiftByAuthId(authID).then( (data) => {
    console.log(data);
  })
};


function example(params) {
  return(
    <Button onClick={getByAuth}>Get Shifts By Auth (check the consol)</Button>
  )
}


export default example;


