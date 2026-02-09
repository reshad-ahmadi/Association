require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Association Backend API is running...');
});

// Contact Us Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Save to Database (Optional)
    try {
      await pool.query(
        'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)',
        [name, email, subject, message]
      );
    } catch (dbErr) {
      console.error('Database save failed (skipping):', dbErr.message);
      // We continue even if DB fails so the user can test the email
    }

    // 2. Set up Nodemailer transporter
    // Note: You need to provide real credentials in .env for this to actually send emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL || 'ahreshadahmadi020@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    // 3. Send Email (Disabled by default until credentials are provided)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    }

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error handling contact form:', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
