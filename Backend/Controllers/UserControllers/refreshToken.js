const jwt = require("jsonwebtoken");
const generateToken = require("../../MiddleWear/GenerateToken/GenerateToken");

const refreshToken = async (req, res) => {
    try {

        const token = req.cookies.RefressToken || (req.headers.authorization && req.headers.authorization.split(" ")[1]);

        if (!token) {
            return res.status(401).json({ success: false, message: "No refresh token provided." });
        }

        // Verify the refresh token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_REFRESH_TOKEN);

        // Generate a new access token
        const userId = decoded.id;
        const accessToken = await generateToken(userId);


        // Set the new access token in a secure cookie
        res.cookie("AccessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        });

        return res.status(200).json({
            success: true,
            message: "New access token generated successfully.",
            accessToken
        });

    } catch (error) {

        console.error("Error refreshing token:", error);
        return res.status(500).json({ success: false, message: "Failed to refresh token.", error: error.message });

    }
}
module.exports = refreshToken;