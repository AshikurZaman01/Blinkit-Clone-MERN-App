const UserModel = require("../../Models/UserSchema/userSchema");

const loginUserDetails = async (req, res) => {
    try {

        const userId = req.userId;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required.", });
        }

        const user = await UserModel.findById(userId).select('-password -refresh_token -forgetPasswordOtp -forgetPasswordExpiry');
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." })
        }

        return res.status(200).json({
            success: true,
            message: "User details fetched successfully.",
            data: user,
        });


    } catch (error) {
        console.error("Error fetching user details:", error);

        return res.status(500).json({
            success: false,
            message: "An error occurred while fetching user details.",
        });
    }
};

module.exports = loginUserDetails;