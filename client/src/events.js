import { AiFillLinkedin } from "react-icons/ai"
import moment from 'moment';

const now = new Date()

  var begin = moment().format("YYYY-MM-01");
  var end = moment().format("YYYY-MM-") + moment().daysInMonth();
  console.log(begin);

  var month = moment().month;

  var firstDay = moment().startOf('month').format('MM-DD-YYYY');
  var lastDay = moment().endOf('month').format("MM-DD-YYYY")
  var array = {};

  function events(){
   
  for(var i=1; i<=30; i++){
  
    var j = i%6;

        if(j === 1 || j===2){
          array[i] 
          = { 'shift':'A', 
              'title':'A shift', 
              'startDate': new Date('10/01/2020'),
              'endDate': new Date('10/01/2020')
            }; 
        
        } else if(j===3 || j===4){
          array[i] 
          = { 'shift':'B', 
              'title':'B shift', 
              'startDate': new Date('10/03/2020'),
              'startDate': new Date('10/03/2020')
            }; 
        } else if(j===5 || j=== 0){
          array[i] 
          = { 'shift':'C', 
              'title':'C shift', 
              'startDate': new Date('10/05/2020'),
              'startDate': new Date('10/05/2020')
            }; 
        }
        console.log(array[i]);
    }

    
  }


export default array
