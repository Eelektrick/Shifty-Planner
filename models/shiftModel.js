const mongoose = require("mongoose")


const crewSchema = new mongoose.Schema({ 
name: {
    type: String,
    required: true,
    trim: true
},
certification: {
    type: String,
    required: true,
    trim: true
}
})


const shiftModel = new mongoose.Schema
({
    //unique id for user
    generated_ID: {
        type: Number,
        required: true,
        trim: true
    },
    //Date of shift
    date: 
    {
        type: Date,
        required: true,
        trim: true
    },
    //Hours of shift
    hours:  
    {
        type: String,
        required: true,
        trim: true
    },
    //Has this shift been traded
    traded:     {
        type: Boolean,
        required: true,
    },
    //A,B,C Custom
    shift: {
        type: String,
        required: true,
        trim: true
    },
    //Who is on this shift
    crew:[{
        personnel: crewSchema
    }]
    
});

module.exports = mongoose.model('Shift', shiftModel);