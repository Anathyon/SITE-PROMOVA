import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Main contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.', success: false });
  }

  try {
    // Configure transporter using Environment Variables (More Secure)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'webmail.pwgov.net',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE !== 'false', // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Helps avoid self-signed cert errors
      }
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send FROM the authenticated user
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Send TO the company email
      replyTo: email, // Reply will go to the real customer's email
      subject: `Novo Contato pelo Site: ${service} - ${name}`,
      html: `
        <h2>Nova mensagem do site PROMOVA</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Serviço de Interesse:</strong> ${service}</p>
        <br>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Mensagem enviada: %s', info.messageId);

    return res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return res.status(500).json({ error: 'Erro ao enviar e-mail. Tente novamente mais tarde.', success: false });
  }
});

// For Vercel Serverless compatibility
export default app;
