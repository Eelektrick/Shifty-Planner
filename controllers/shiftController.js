const { query } = require("express");
const db = require("../models");

// Defining methods for the shiftsController
module.exports = {
  findAll: function (req, res) {
    db.Shift
      .find({ ignoredLists: { $ne: req.query.userId }})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvdLists: function (req, res) {
    db.Shift
      .find({ approvedLists: { $ne: req.query.userId }, ignoredLists: { $ne: req.query.userId } ,traded: 3 })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Shift
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAuthId: function (req, res) {
    console.log(req.query.authID);

    db.Shift
      .find({ authID: req.query.authID, traded: 1 })
      .sort({ date: -1 })
      .then(dbModel =>
        res.json(dbModel)
      )
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Shift
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveID: function (req, res) {
    // console.log(req.body);
    db.Shift
      .findOneAndUpdate({ _id: req.params.id }, { $push: { ignoredLists: req.body.userId } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveRejectID: function (req, res) {
    // console.log(req.body);
    db.Shift
      .findOneAndUpdate({ authID: req.params.id }, { $push: { ignoredLists: req.body.userId } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveAvdDetails: function (req, res) {
    db.Shift
      .findOneAndUpdate({ _id: req.params.id }, { $push: { approvedLists: req.body.avdDetails } }, { new: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log('traded Info');
    console.log(req.body.traded);
    db.Shift
      .findOneAndUpdate({ _id: req.params.id }, { traded: req.body.traded }, { new: true })
      .then(json => {
        console.log("put request made");
        console.log(json);
        res.json(json);
      })
      .catch(err => res.status(422).json(err));
  },
  multiUpdateMyDetails: function (req, res) {
    // console.log('traded Info');
    // console.log(req.body.traded);
  //   db.Shift
  //     .findOneAndUpdate({ _id: req.params.id },
  //       {traded: req.body.traded },
  //       {authID :  req.body.authID},
  //       {shift :  req.body.shift},
  //       {name: req.body.name },
  //       { new: true })
  //     .then(json => {
  //       console.log("put request made");
  //       console.log(json);
  //       res.json(json);
  //     })
  //     .catch(err => res.status(422).json(err));
  // },
console.log(req.body.theirDetails.traded);
  db.Shift
  .updateMany(
    { _id: req.params.id },
    [
       { $set: {  traded: req.body.theirDetails.traded , authID :  req.body.theirDetails.authID, shift :  req.body.theirDetails.shift, name: req.body.theirDetails.name   }}
      
    ]
 ) .then(json => {
  console.log("put request made");
  console.log(json);
  res.json(json);
})
.catch(err => res.status(422).json(err));
},

  remove: function (req, res) {
    db.Shift
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
