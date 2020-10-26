const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Shifts collection and inserts the shifts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/test"
);

const shiftSeed = [{
      //unique id for user
      generated_ID: 123,
    //Date of shift
    date: new Date(),
    //Hours of shift
    hours: "0700-1900",
    //Has this shift been traded
    traded: false,
    //A,B,C Custom
    shift: "A",
    //Who is on this shift
    crew:["Sam","Yakini","Atima"]}
];

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