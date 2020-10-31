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
    console.log("Generate Shift");
    


    //When "Generate Shift" is pressed.
    //Then a popup with 2 options is displayed plus a submit button.
    //options:
    //  1 - Interval to determine when shift will occur/at what interval
    //    1.a - allows for custom time frame, option to select classic A B C.
    //  2 - Option to determine who will be on the shift (api call is made to check certification to dynamically verify
    //      that crew is up to spec).
    //    2.a Allows user to select a default where and api call will be made and select everyone who is defaulted to
    //        that shift.
    //When popup submit is pressed then the data is verified against the database and if it clears a post request will be 
    // sent storing the new shift(s)




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
