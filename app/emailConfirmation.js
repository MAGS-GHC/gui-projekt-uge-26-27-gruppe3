const nodemailer = require('nodemailer');

export const sendEmail = async (sendTo, reservedSeats) => {
  try {
    // Create a transporter using Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'noreplystadionbooking@gmail.com',
        pass: 'dcarqdaklterukho',
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'noreplystadionbooking@gmail.com',
      to: sendTo,
      subject: 'Your Reserved Seats',
      text: reservedSeats,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return true;
    // console.log('Email sent successfully:', info.messageId);
  } catch (error) {
    return false;
    // console.error('Error sending email:', error);
  }
};

// dcarqdaklterukho