const forgotPasswordOTPTemplate = ({ name, otp }) => {
    return `
    <html>
    <head>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
            }
            .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
            .header {
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
            }
            .otp-box {
                display: inline-block;
                padding: 10px 20px;
                border: 2px dashed #4CAF50;
                border-radius: 10px;
                font-size: 28px;
                font-weight: bold;
                color: #4CAF50;
                letter-spacing: 5px;
                margin: 20px 0;
            }
            .footer {
                margin-top: 30px;
                font-size: 14px;
                color: #777;
            }
            .button {
                background-color: #4CAF50;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">Password Reset Request</div>
            <p>Hello <strong>${name}</strong>,</p>
            <p>You requested a password reset. Please use the OTP below to reset your password:</p>
            <div class="otp-box">${otp}</div>
            <p>This OTP will expire in 1 hour. If you did not request a password reset, please ignore this email.</p>
            <p>Thank you for using our service!</p>
            <p class="footer">&copy; ${new Date().getFullYear()} Blinkit. All Rights Reserved.</p>
        </div>
    </body>
    </html>
    `;
};

module.exports = forgotPasswordOTPTemplate;
