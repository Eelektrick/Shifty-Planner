const { Schema } = require("mongoose");

const personnelModel = new Schema
({
    //unique id for user
    generated_ID: {
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
    certifications:[{
        type: String,
        required: true,
        trim: true
    }],
    shift: {
        type: String,
        required: true,
        trim: true
    }
})