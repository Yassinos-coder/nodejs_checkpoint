const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "",
    pass: "",
  }
});

const mailOptions = {
  from: 'castroyassine08@gmail.com',
  to: 'castroyassine0@gmail.com',
  subject: 'From NodeJs',
  text: 'Hello World !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

