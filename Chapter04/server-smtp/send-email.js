const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 4321,
});

transporter.sendMail(
  {
    from: "beth@example.com",
    to: "laddie@example.com",
    subject: "Hello",
    text: "Hello world!",
  },
  (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log("Message Sent:", info);
  }
);
