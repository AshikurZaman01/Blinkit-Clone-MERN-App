const UserModel = require("../../Models/UserSchema/userSchema");

const userLogout = async (req, res) => {
    try {

        const userId = req.userId;

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
        }

        res.clearCookie('AccessToken', cookieOptions);
        res.clearCookie('RefressToken', cookieOptions);

        const removeRefreshTokenOfUser = await UserModel.findOneAndUpdate(
            { _id: userId },
            { refresh_token: "" },
            { new: true }
        )

        if (!removeRefreshTokenOfUser) {
            return res.status(404).json({
                success: false, message: "User not found. Logout failed."
            });
        }

        res.status(200).json({
            message: "User Logout Successfully",
            success: true
        })

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message
        });
    }
}

module.exports = userLogout;