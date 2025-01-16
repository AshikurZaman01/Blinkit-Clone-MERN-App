const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/UserSchema/userSchema");

const verifiedAuth = async (req, res, next) => {
    try {

        const token = req.cookies.AccessToken ||
            (req.headers.authorization && req.headers.authorization.split(" ")[1]);
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized user." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized user." });
        }
        req.userId = decoded.id;
        next();

    } catch (error) {

        console.error("Authorization Error: ", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
            error: error.message
        });

    }

}

module.exports = verifiedAuth;