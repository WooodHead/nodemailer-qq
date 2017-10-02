var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

// var wellknown = require("nodemailer-wellknown");
// var config = wellknown("QQ");
// config.auth = {
//   user: 'username',
//   pass: 'password'
// }
var config = require('./config.js');

// var mailOptions = {
//   from: "aa@bb.com",
//   to: "cc@dd.com",
//   subject: "test",
//   text: "text plain",
//   html: "<div>div content</div>"
// };

var mailOptions = require('./mail-options.js')

var transporter = nodemailer.createTransport(smtpTransport(config));

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: ' + info.response);

});