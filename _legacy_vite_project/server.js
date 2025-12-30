import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log('📝 Received Contact Request:');
  console.table({ Name: name, Email: email, Phone: phone, Message: message });

  try {
    // 1. Send Email (Mocking for now unless env vars are present)
    /*
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });
    
    await transporter.sendMail({
      from: '"Master Bin Website" <noreply@masterbin.com>',
      to: process.env.ADMIN_EMAIL, // Admin email
      subject: `New Lead: ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    });
    */
    console.log(`✅ Email notification "sent" to ${process.env.ADMIN_EMAIL} (Simulated)`);

    // 2. Send SMS (Twilio Placeholder)
    /*
    const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
    await client.messages.create({
      body: `New Lead: ${name} - ${phone}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.ADMIN_PHONE
    });
    */
    console.log(`✅ SMS notification "sent" to ${process.env.ADMIN_PHONE} (Simulated)`);

    // Success response
    res.status(200).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
});
