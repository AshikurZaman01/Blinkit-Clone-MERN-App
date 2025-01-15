const verifyEmailTemplate = ({ name, url }) => {
    return `
    <div style="
        font-family: 'Helvetica Neue', Arial, sans-serif;
        padding: 40px;
        max-width: 600px;
        margin: auto;
        background: #f9f9f9;
        border-radius: 12px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border: 1px solid #e0e0e0;
    ">
        <div style="text-align: center;">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Logo" width="80" style="border-radius: 50%;">
            <h1 style="color: #333; font-size: 28px; margin: 20px 0;">Welcome to Blinkit, ${name}!</h1>
        </div>
        
        <p style="color: #555; font-size: 16px; text-align: center; line-height: 1.6;">
            Thank you for joining us! Click the button below to verify your email address and complete your registration.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="${url}" 
               style="
               background: linear-gradient(135deg, #ff7e5f, #feb47b);
               color: white;
               padding: 12px 25px;
               text-decoration: none;
               border-radius: 8px;
               font-weight: bold;
               box-shadow: 0 4px 10px rgba(0,0,0,0.2);
               display: inline-block;
               transition: all 0.3s ease-in-out;">
                ✅ Verify Email
            </a>
        </div>

        <p style="color: #555; font-size: 14px; text-align: center;">
            If you didn't create this account, you can safely ignore this email.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <footer style="text-align: center; font-size: 12px; color: #888;">
            &copy; 2025 Blinkit | All rights reserved. <br>
            Need help? <a href="mailto:support@blinkit.com" style="color: #ff7e5f; text-decoration: none;">Contact Support</a>
        </footer>
    </div>
    `;
}

module.exports = verifyEmailTemplate;
