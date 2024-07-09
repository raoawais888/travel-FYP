const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.telstranetwork.net', // SMTP server hostname
    port: 587, // Port for secure SMTP (TLS)
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'travel@telstranetwork.net', // Your email address
        pass: '' // Your email password or application-specific password
    },
    tls: {
        rejectUnauthorized: false // Only needed if the server uses a self-signed certificate
    }
});


// Function to send emails
const sendEmail = async (to, subject, data) => {
    try {
        const mailOptions = {
            from: 'travel@telstranetwork.net', // Sender address
            to: to, // List of recipients
            subject: subject, // Subject line
            text: text // Plain text body
            // You can also use html instead of text if you want to send HTML emails
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
        throw error; // Throw error for error handling
    }
};

module.exports = sendEmail;
