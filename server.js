const express = require("express");
const app = express(); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const mongoose = require("mongoose");
const shiftRoutes = express.Router();
const PORT = process.env.PORT || 3001;

let Shift = require('./models/shiftModel');

//Define middleware here
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test"
, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }





shiftRoutes.route('/shift').get(function(req, res) {
  Shift.find(function(err, shifts) {
      if (err) {
        
          console.log(err);
      } else {
          res.json(shifts);
      }
  });
});


// Add routes, both API and view
// app.use(routes);
app.use('/shifts', shiftRoutes)
// Start the API server /test /test
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});