const jwt = require("jsonwebtoken");
const UserModel = require("../../Models/UserSchema/userSchema");

const verifiedAuth = async (req, res, next) => {
    try {

        const token = req.cookies.AccessToken || req?.header?.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized user." });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN);
        if (!decoded) {
            return res.status(401).json({ success: false, message: "Unauthorized user." });
        }

        const user = await UserModel.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized user." });
        }
        req.user = user;
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