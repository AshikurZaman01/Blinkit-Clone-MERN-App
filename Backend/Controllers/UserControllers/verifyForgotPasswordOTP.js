const UserModel = require("../../Models/UserSchema/userSchema");

const verifyForgotPasswordOTP = async (req, res) => {
    try {

        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Please provide email and otp" });
        }

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Verify if the OTP has expired
        const currentTime = new Date();
        if (new Date(user.forgetPasswordExpiry) < currentTime) {
            return res.status(400).json({ success: false, message: "OTP has expired." });
        }

        // Check if the OTP matches
        if (user.forgetPasswordOtp !== otp) {
            return res.status(400).json({ success: false, message: "Invalid OTP." });
        }

        user.forgetPasswordOtp = "";
        user.forgetPasswordExpiry = "";
        await user.save();

        return res.status(200).json({ success: true, message: "OTP verified successfully" });

    } catch (error) {

        console.error("Error verifying OTP:", error);
        return res.status(500).json({ success: false, message: "An error occurred while verifying the OTP.", error: error.message });

    }
}

module.exports = verifyForgotPasswordOTP;