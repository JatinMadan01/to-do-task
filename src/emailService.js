const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendReminderEmail = async () => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'recipient@example.com',
    subject: 'Reminder',
    text: 'This is a reminder email.'
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendReminderEmail };
