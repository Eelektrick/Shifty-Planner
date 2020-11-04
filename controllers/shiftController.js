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
      .find({ authID: req.query.userId , traded : 3 })
      .sort({ date: -1 })  
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
  saveID: function (req, res) {
    db.Shift
      .findOneAndUpdate({ _id: req.params.id }, { $push: { ignoredLists: req.body.userId } }, { new: true })
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
  db.Shift
  .updateMany(
    { _id: req.params.id },
    [
       { $set: {  traded: req.body.theirDetails.traded , authID :  req.body.theirDetails.authID, shift :  req.body.theirDetails.shift, name: req.body.theirDetails.name   }}
      
    ]
    ) .then(json => {
      res.json(json);
    })
    .catch(err => res.status(422).json(err));
    },
  removefromAvd: function (req, res) {
      db.Shift
      .update(
        { _id: req.params.id },
        { $pull: { approvedLists: { authID: req.body.userId} } }
      ).then(json => {
        res.json(json);
      })
      .catch(err => res.status(422).json(err));
      }
    }