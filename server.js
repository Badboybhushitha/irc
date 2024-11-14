const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('twilio');
const cron = require('node-cron');

const app = express();
const PORT = 3000;

// Twilio setup
const ACCOUNT_SID = 'ACc2513c138e1f234ee3311187bfd81714'; // Replace with your Account SID
const AUTH_TOKEN = 'your_auth_token'; // Replace with your Auth Token
const TWILIO_WHATSAPP_NUMBER = 'whatsapp:+14155238886'; // Twilio Sandbox WhatsApp Number
const YOUR_WHATSAPP_NUMBER = 'whatsapp:+94788054702'; // Your WhatsApp Number

const client = new Client(ACCOUNT_SID, AUTH_TOKEN);

app.use(bodyParser.json());

// Route to handle signup
app.post('/signup', (req, res) => {
    const { name, address, phone, email, username, password, bankDetails } = req.body;

    const message = `
    New Signup Details:
    Name: ${name}
    Address: ${address}
    Phone: ${phone}
    Email: ${email}
    Username: ${username}
    Bank Details:
    - Bank Name: ${bankDetails.bankName}
    - Account Number: ${bankDetails.accountNumber}
    - Account Name: ${bankDetails.accountName}
    - Branch: ${bankDetails.branch}
    `;

    // Send WhatsApp message
    client.messages.create({
        body: message,
        from: TWILIO_WHATSAPP_NUMBER,
        to: YOUR_WHATSAPP_NUMBER
    })
    .then(() => res.status(200).json({ message: 'Signup details sent to WhatsApp' }))
    .catch(error => res.status(500).json({ error: 'Failed to send WhatsApp message' }));
});

// Scheduled message every Sunday for deposit reminder
cron.schedule('0 9 * * SUN', () => {
    const reminderMessage = 'Reminder: Today is the day to deposit money for B.Arunod Dropshipping!';

    client.messages.create({
        body: reminderMessage,
        from: TWILIO_WHATSAPP_NUMBER,
        to: YOUR_WHATSAPP_NUMBER
    })
    .then(message => console.log('Sunday Reminder Sent:', message.sid))
    .catch(error => console.error('Error sending reminder:', error));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
