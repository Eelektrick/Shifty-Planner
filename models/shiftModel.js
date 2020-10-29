const mongoose = require("mongoose")

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const shiftModel = new mongoose.Schema
({
    //unique id for user
     authID: {
         type: Number,
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
        //  unique: true,
         required: 'Email address is ne',
         validate: [validateEmail, 'Please fill a valid email address'],
         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
     },
    //A,B,C Custom
    shift: {
        type: String,
        required: true,
        trim: true
    },
    //Start Date and Time
    start: 
    {
        type: Date,
        required: true,
        trim: true
    },
    //End Date and Time
    end: 
    {
        type: Date,
        required: true,
        trim: true
    },
    //Has this shift been traded
    traded:     
    {
        type: Number,
        required: true,
    },
    //Who is on this shift
    name:{
        type:String
    },
});

module.exports = mongoose.model('Shift', shiftModel);