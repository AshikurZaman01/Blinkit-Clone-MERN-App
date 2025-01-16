const UserModel = require("../../Models/UserSchema/userSchema");

const verifyForgotPasswordOTP = async (req, res) => {
    try {

        const { email, otp } = req.body;

        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }



    } catch (error) {

    }
}

module.exports = verifyForgotPasswordOTP;