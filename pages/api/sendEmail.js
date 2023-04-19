import nodemailer from 'nodemailer';

import config from '../../env.config';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Your email credentials
    const user = config.EMAIL_USER;
    const pass = config.EMAIL_PASS;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // e.g., 'smtp.gmail.com'
      port: 587, // Use 587 or 465 for Gmail, or the appropriate port for your email server
      secure: false, // true for port 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Set up email data
    const mailOptions = {
      from: user,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
      html: req.body.html,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Email not sent', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
