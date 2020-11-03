const mongoose = require("mongoose");
const db = require("../models");
const moment = require("moment");
// This file empties the Shifts collection and inserts the shifts below

//Seed Online MongoDB


//Seed Local
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/shifty-planner" ,{ useNewUrlParser: true }
);

const personnelSeed = [
  {
    authID: "auth0|5f9d8116b472680076ec6966",
    emailID: "corey.post@mail.com",
    rank:"default",
    superior:"PERSON",
    agency:"Test",
    name: "Corey",
    certifications: ["AEMT", "EMT"],
    shift: "A",
    PermissionsLevel: "Default",
  },
  {
    authID: "auth0|5f9d80efe12ecb0068a0d7ef",
    emailID: "yakini.arumugakani@mail.com",
    rank:"default",
    superior:"PERSON",
    agency:"Test",
    name: "Yakini",
    certifications: ["Paramedic", "EMT"],
    shift: "B",
    PermissionsLevel: "Manager",
  },
  {
    authID: "auth0|5f9d80a8e12ecb0068a0d7eb",
    emailID: "atime.bennet@mail.com",
    rank:"default",
    superior:"PERSON",
    agency:"Test",
    name: "Atima",
    certifications: ["Paramedic", "EMT"],
    shift: "C",
    PermissionsLevel: "Default",
  },
  {
    authID: "auth0|5f9d83219faf390069c6acae",
    emailID: "sam.grelick@mail.com",
    rank:"default",
    superior:"PERSON",
    agency:"Test",
    name: "Sam",
    certifications: ["AEMT", "EMT"],
    shift: "Custom",
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
