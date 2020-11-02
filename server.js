const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const nodemailer = require("nodemailer");
const sendMail = require("./client/src/components/Email");
const PORT = process.env.PORT || 3001;

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: "shiftyplanner@gmail.com",
//       pass: "shiftyplanner2020"
//   }
// });

// let mailOptions = {
//   from:  "shiftyplanner@gmail.com",
//   to: "nickzehn10@hotmail.com",
//   subject: 'Nodemailer - Test',
//   text: 'Wooohooo it works!!'
// };

// transporter.sendMail(mailOptions, (err, data) => {
//   if (err) {
//       return log('Error occurs');
//   }
//   return log('Email sent!!!');
// });

// Set static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
const publicVapidKey =
  "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
const privateVapidKey = "3KzvKasA2SoCxsp0iIG_o9B0Ozvl1XDwI63JRKNIWBM";

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);
// Subscribe Route
app.post("/subscribe", (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "SHIFTY PLANNER" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});
//email
app.post("/email", (req, res) => {
  const { subject, email, text } = req.body;
  console.log("Data", req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      console.log("Email Error!");
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));
// app.use(cors())
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/shifty-planner",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
