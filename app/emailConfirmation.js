// Using nodemailer we can send mails
const nodemailer = require('nodemailer');

// Make a export funtion that is async to send mails
export const sendEmail = async (sendTo, reservedSeats, userName) => {
  try {
    // Using nodemailer a transpoerter object is made that logs into the account from
    // where the mail is sent from and tells it what kind of mailservice is used
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'noreplystadionbooking@gmail.com',
        // This password is a app password bc this counts as a less secure app so the 
        // only way to access a google account from that kind app is using a app password
        pass: 'dcarqdaklterukho',
      },
    });

    // You write the email you sent it to and what mail is used to send it then subject and
    // text is filled in and you can send the mail
    const mailOptions = {
      from: 'noreplystadionbooking@gmail.com',
      to: sendTo,
      subject: 'Your Reserved Seats',
      text: reservedSeats,
    };

    // Sends the email with the settings you made above
    const info = await transporter.sendMail(mailOptions);
    return true;
  } 
  catch (error) {
    return false;
  }
};
