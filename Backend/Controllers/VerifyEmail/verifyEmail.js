const UserModel = require("../../Models/UserSchema/userSchema");

const verifyEmail = async (req, res) => {
    try {

        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ success: false, message: "Verification code is required." });
        }

        const user = await UserModel.findOne({ _id: code });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid verification code." });
        }

        if (user.verify_email) {
            return res.status(400).json({ success: false, message: "Email already verified." });
        }

        user.verify_email = true;
        await user.save();

        return res.status(200).json({ success: true, message: "Email verified successfully." });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}
module.exports = verifyEmail;

