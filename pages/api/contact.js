export default async function (req, res) {
    require('dotenv').config();
  
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'niyademo@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    });
  
    const mailData = {
      from: 'niyademo@gmail.com',
      to: 'info@niyadda.com',
      subject: `Message From ${req.body.name}`,
      text: req.body.message + ' | Sent from: ' + req.body.email,
      html: `<div><p>Name: ${req.body.name}</p> </div><div><p> Details: ${req.body.message}</p> </div><p>Sent from: ${req.body.email}</p>`,
    };
  
    try {
      const info = await transporter.sendMail(mailData);
      return res.status(200).send('Email sent successfully');
    } catch (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    
  }
  