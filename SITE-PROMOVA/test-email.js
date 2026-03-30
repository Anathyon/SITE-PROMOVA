import nodemailer from 'nodemailer';

async function testEmail() {
  let transporter = nodemailer.createTransport({
    host: 'webmail.pwgov.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'noreply@promovaproducoes.com',
      pass: 'N0r$p@y26',
    },
    // Adding this since pwgov.net might have self-signed or specific cert issues
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    let info = await transporter.sendMail({
      from: '"Test Promova" <noreply@promovaproducoes.com>',
      to: 'noreply@promovaproducoes.com', // send to self to test
      subject: 'Test Email Sender',
      text: 'This is a test email from the Promova website script.',
      html: '<b>This is a test email from the Promova website script.</b>',
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

testEmail();
