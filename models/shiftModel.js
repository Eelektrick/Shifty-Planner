const { Schema } = require("mongoose")


const crewSchema = new Schema({ 
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


const shiftModel = new Schema
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
    type: {
        type: String,
        required: true,
        trim: true
    },
    //Who is on this shift
    crew:[{
        crew:[crewSchema]
    }],
    shift: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Shift', shiftModel);