const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "shiftyplanner@gmail.com",
    pass: "shiftyplanner2020",
  },
});

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: "shiftyplanner@gmail.com",
    to: email,
    subject: "Trade Shifts",
    text: "{name} has been posted trade shift!",
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
