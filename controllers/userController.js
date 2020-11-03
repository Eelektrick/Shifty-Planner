const { query } = require("express");
const db = require("../models");

// Defining methods for the shiftsController
module.exports = {
  findAll: function(req, res) {
    // console.log(req.query.userId);
    db.Personnel
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Personnel
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByName: function(req, res) {
    console.log("req.query.name "+req.query.name);
    db.Personnel
      .find( {name: req.query.name} )
      .then(dbModel =>{ 
        console.log(dbModel)
        return res.json(dbModel);
        })
      .catch(err => res.status(422).json(err));
  },

  findByShift: function(req, res) {
    console.log("req.query.shift "+req.query.shift);
    db.Personnel
      .find( {shift: req.query.shift} )
      .then(dbModel =>{ 
        console.log(dbModel)
        return res.json(dbModel);
        })
      .catch(err => res.status(422).json(err));
  },

  findByAuthId: function(req, res) {
    console.log(req.query.authID);
   
    db.Personnel
      .find( {authID: req.query.authID , traded: 1 } )
      .sort({ date : -1 })
      .then(dbModel => 
        res.json(dbModel)
        )
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Personnel
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveID: function(req, res) {
    console.log(req.body);
    db.Personnel
      .findOneAndUpdate({ _id: req.params.id}, {$push:{ignoredLists: req.body.userId}} ,{new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
   
    db.Personnel
      .findOneAndUpdate({ _id: req.params.id}, {traded:2} ,{new: true})
      .then(json => {
        console.log("put request made");
        console.log(json);
        res.json(json);
      })
    // db.Personnel
    //   .findOneAndUpdate(filter,  update , {
    //     new: true,
    //     upsert: true 
    //   })
   
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Personnel
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
