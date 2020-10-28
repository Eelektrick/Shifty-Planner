const mongoose = require("mongoose");

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const personnelModel = new mongoose.Schema
({
    
    //unique id for user
    authID: {
        type: Number,
        required: true,
        trim: true
    },
    //Name of person
    name: 
    {
        type: String,
        required: true,
        trim: true
    },
     //Email Id for user
     emailID: 
     {
         type: String,
         required: true,
         trim: true,
         lowercase: true,
         unique: true,
         required: 'Email address is required',
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     },
    //(Spanish Fork Fire & EMS, Lehi Fire Department)
    agency:  
    {
        type: String,
        required: true,
        trim: true
    },
    //Who does this person answer too?
    superior:     {
        type: String,
        required: true,
        trim: true
    },
    //Permissions level, like manager, captain, admin
    rank: {
        type: String,
        required: true,
        trim: true
    },
    //Person's certifications
    certifications:[{
        type: String,
        required: true,
        trim: true
    }],
    //A,B,C custom?
    shift: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('personnel', personnelModel);