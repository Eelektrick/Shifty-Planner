const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");
// This file empties the Shifts collection and inserts the shifts below

//Seed Online MongoDB


//Seed Local
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/shifty-planner" ,{ useNewUrlParser: true }
// );

var begin = moment().startOf('month');

const shiftSeed =[];
for (var i = 0; i < moment().daysInMonth(); i++) {

  var j = i % 6;

  if (j === 0 || j === 1) {
    shiftSeed[i]
      = {
      // 'generated_ID': 
      'authID': 123,
      'emailID': 'abc@gmail.com',
      'shift': 'A',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Sam",
      'ignoredLists' : []
    }
  } else if (j === 2 || j === 3) {
    shiftSeed[i]
      = {
      'authID': 456,
      'emailID': 'abc@gmail.com',
      'shift': 'B',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Wyatt",
      'ignoredLists' : []
    }
  } else if (j === 4 || j === 5) {
    shiftSeed[i]
      = {
      'authID': 789,
      'emailID': 'abc@gmail.com',
      'shift': 'C',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Dennis",
      'ignoredLists' : []
    }
  }
}

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