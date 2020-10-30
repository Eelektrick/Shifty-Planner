const { query } = require("express");
const db = require("../models");

// Defining methods for the shiftsController
module.exports = {
  findAll: function(req, res) {
    db.Shift
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Shift
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByAuthId: function(req, res) {
    console.log("req");
    console.log(req);
    db.Shift
      .find( {authID :123} )
      .then(dbModel => 
        
        res.json(dbModel),
        console.log(dbModel)
        )
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Shift
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
 
    db.Shift
      .findOneAndUpdate(
      { _id : req.params.id},
      { $set: { "traded" : 2} },
      {  upsert:true, new : true }
      )
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Shift
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
