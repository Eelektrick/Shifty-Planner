const { query } = require("express");
const db = require("../models");

// Defining methods for the shiftsController
module.exports = {
  findAll: function(req, res) {
    // console.log(req.query.userId);
    db.Shift
      .find({ignoredLists: { $ne: req.query.userId } } )
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAvdLists: function(req,res){
    db.Shift
    .find({approvedLists: { $ne: req.query.userId } , traded : 3})
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
  // findByAuthId: function(req, res) {
  //   console.log(req.query.authID);
  //   db.Shift
  //     .find({authID: { $eq: req.query.authID } })
  //     .sort({ date : -1 })
  //     .then(dbModel => 
  //       res.json(dbModel)
  //       )
  //     .catch(err => res.status(422).json(err));
  // },
  findByAuthId: function(req, res) {
    console.log(req.query.authID);
   
    db.Shift
      .find( {authID: req.query.authID , traded: 1 } )
      .sort({ date : -1 })
      .then(dbModel => 
        res.json(dbModel)
        )
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Shift
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveID: function(req, res) {
    // console.log(req.body);
    db.Shift
      .findOneAndUpdate({ _id: req.params.id}, {$push:{ignoredLists: req.body.userId}} ,{new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveAvdDetails: function(req, res) {
    // console.log('My details');
    // console.log(req);
    // const data = {
    //   name : 

    // }
    db.Shift
      .findOneAndUpdate({ _id: req.params.id}, {$push:{approvedLists: req.body.avdDetails}} ,{new: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('traded Info');
    console.log(req.body.traded);
    db.Shift
      .findOneAndUpdate({ _id: req.params.id}, {traded: req.body.traded} ,{new: true})
      .then(json => {
        console.log("put request made");
        console.log(json);
        res.json(json);
      })
    // db.Shift
    //   .findOneAndUpdate(filter,  update , {
    //     new: true,
    //     upsert: true 
    //   })
   
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
