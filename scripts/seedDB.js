const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");
// This file empties the Shifts collection and inserts the shifts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shiftplanner"
);

var begin = moment().startOf('month');

const shiftSeed =[];
for (var i = 0; i < moment().daysInMonth(); i++) {

  var j = i % 6;

  if (j === 0 || j === 1) {
    shiftSeed[i]
      = {
      // 'generated_ID': 
      'shift': 'A',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Sam"
    },
    {
    'shift': 'A',
    'start': moment(begin).add(i, 'days').hours('10').toDate(),
    'end': moment(begin).add(i, 'days').hours('17').toDate(),
    'traded': 1,
    'crew' : "Corey"
  },
  {
    'shift': 'A',
    'start': moment(begin).add(i, 'days').hours('10').toDate(),
    'end': moment(begin).add(i, 'days').hours('17').toDate(),
    'traded': 1,
    'crew' : "Atima"
  },
  {
    'shift': 'A',
    'start': moment(begin).add(i, 'days').hours('10').toDate(),
    'end': moment(begin).add(i, 'days').hours('17').toDate(),
    'traded': 1,
    'crew' : "Yakini"
  }
  } else if (j === 2 || j === 3) {
    shiftSeed[i]
      = {
      'shift': 'B',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Wyatt"
    },
    {
      'shift': 'B',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Dilan"
    
    };
  } else if (j === 4 || j === 5) {
    shiftSeed[i]
      = {
      'shift': 'C',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Dennis"
    },
    {
      'shift': 'C',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Jordan"
    },
    {
      'shift': 'C',
      'start': moment(begin).add(i, 'days').hours('10').toDate(),
      'end': moment(begin).add(i, 'days').hours('17').toDate(),
      'traded': 1,
      'crew' : "Jameson"
    };
  }
}
// const shiftSeed = [{
//       //unique id for user
//     generated_ID: 123,
//     //Date of shift
//     date: new Date(),
//     //Hours of shift
//     hours: "0700-1900",
//     //Has this shift been traded
//     traded: false,
//     //A,B,C Custom
//     shift: "A",
//     //Who is on this shift
//     crew:["Sam","Yakini","Atima"]},

// ];
console.log(shiftSeed);
db.Shift
  .remove({})
  .then(() => db.Shift.collection.insertMany(shiftSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });