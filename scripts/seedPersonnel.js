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

const personnelSeed = [
  {
    authID: "123",
    emailID: "abc@gmail.com",
    name: "Sam",
    certifications: ["AEMT", "EMT"],
    AssignedShift: "A",
    PermissionsLevel: "Default",
  },
  {
    authID: "1344",
    emailID: "test1@gmail.com",
    name: "Yakini",
    certifications: ["Paramedic", "EMT"],
    AssignedShift: "B",
    PermissionsLevel: "Manager",
  },
  {
    authID: "137744",
    emailID: "test2@gmail.com",
    name: "Atima",
    certifications: ["Paramedic", "EMT"],
    AssignedShift: "C",
    PermissionsLevel: "Default",
  },
  {
    authID: "133244344",
    emailID: "test3@gmail.com",
    name: "Corey",
    certifications: ["AEMT", "EMT"],
    AssignedShift: "Custom",
    PermissionsLevel: "Manager",
  },
];

console.log(personnelSeed);
db.Personnel.remove({})
  .then(() => db.Personnel.collection.insertMany(personnelSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
