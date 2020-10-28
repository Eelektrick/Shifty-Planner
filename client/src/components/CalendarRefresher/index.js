import React, { Component } from 'react'
import {Button} from "react-bootstrap"
import API from '../../utils/API';


class CalenderRefresher extends Component {
  constructor() {
    super();
    this.state = {
      
     
    };
  }

  componentDidMount() {
    
  }

  handleSelect = event => {
    console.log("Hello");

    API.getShifts().then((json)=> {
        console.log(json);
    })

  };



  


 




  render() {

        return (
      <div>
       <Button onClick={this.handleSelect}>Test Cal Refresh</Button>


      </div>
    )
  }
}

export default CalenderRefresher
