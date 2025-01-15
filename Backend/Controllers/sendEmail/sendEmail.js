const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendEmail = async (email, subject, html) => {
    try {
        await transporter.sendMail({
            from: '"Blinkit" <no-reply@blinkit.com>',
            to: email,
            subject: subject,
            html: html
        });
        return true;
    } catch (error) {
        console.error("Email sending error:", error.message);
        return false;
    }
};

module.exports = sendEmail;
