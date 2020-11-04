const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");
// This file empties the Shifts collection and inserts the shifts below

//Seed Online MongoDB

// Seed Local
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/shifty-planner",
//   { useNewUrlParser: true }
// );
mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://admin:35w7Hq$9mzJq@cluster0.7zk9f.mongodb.net/shifty-planner?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

var begin = moment().startOf("month");

const shiftSeed = [];
for (var i = 0; i < begin.daysInMonth(); i++) {
  var j = i % 6;

  if (j === 0 || j === 1) {
    shiftSeed[i]
      = {
      // 'generated_ID': 
      'authID': 'auth0|5f9d8116b472680076ec6966',
      'shift': 'A',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Corey",
      'approvedLists': [],
      'ignoredLists' : []
    }
  } else if (j === 2 || j === 3) {
    shiftSeed[i]
      = {
      'authID': 'auth0|5f9d80efe12ecb0068a0d7ef',
      'shift': 'B',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Yakini",
      'approvedLists': [],
      'ignoredLists' : []
    }
  } else if (j === 4 || j === 5) {
    shiftSeed[i]  
      = {
      'authID': 'auth0|5f9d80a8e12ecb0068a0d7eb',
      'shift': 'C',
      'start': moment(begin).add(i, 'days').hours('07').toDate(),
      'end': moment(begin).add(i, 'days').hours('19').toDate(),
      'traded': 1,
      'name' : "Atima",
      'approvedLists': [],
      'ignoredLists' : []
    },
    {
    'authID': 'auth0|5f9d83219faf390069c6acae',
    'shift': 'C',
    'start': moment(begin).add(i, 'days').hours('07').toDate(),
    'end': moment(begin).add(i, 'days').hours('19').toDate(),
    'traded': 1,
    'name' : "Sam",
    'approvedLists': [],
    'ignoredLists' : []
  }
  }
}

console.log(shiftSeed);
db.Shift.remove({})
  .then(() => db.Shift.collection.insertMany(shiftSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
