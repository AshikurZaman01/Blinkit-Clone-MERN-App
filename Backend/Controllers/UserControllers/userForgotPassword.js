const sendEmail = require("../../Config/sendEmail/sendEmail");
const UserModel = require("../../Models/UserSchema/userSchema");
const forgotPasswordOTPTemplate = require("../../Utils/forgotPasswordOTPTemplate");
const generateOTP = require("../../Utils/GenerateOTP/generateOTP");

const userForgotPassword = async (req, res) => {
    try {

        const { email } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const otp = await generateOTP();
        const expireTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiry


        await UserModel.findByIdAndUpdate(user._id, {
            forgetPasswordOtp: otp,
            forgetPasswordExpiry: expireTime.toISOString()
        });

        // Prepare email content
        const subject = "Password Reset OTP";
        const html = forgotPasswordOTPTemplate({ name: user.name, otp });

        // Send email with the generated OTP
        const emailSent = await sendEmail(email, subject, html);

        if (emailSent) {
            return res.status(200).json({ success: true, message: "OTP sent to your email." });
        } else {
            return res.status(500).json({ success: false, message: "Failed to send OTP email." });
        }

    } catch (error) {

        console.error("Error in forgot password:", error);
        return res.status(500).json({ success: false, message: "An error occurred.", error: error.message });

    }
}
module.exports = userForgotPassword;