// Example backend using Express.js for handling email sending in TypeScript

import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  // Configure your email provider here (SMTP settings)
  service: 'gmail',
  auth: {
    user: 'rahurst93@gmail.com',
    pass: 'Randy#123h',
  },
});

app.post('/api/sendEmail', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'rahurst93@gmail.com', // Replace with your email
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
