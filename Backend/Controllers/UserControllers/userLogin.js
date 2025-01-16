const UserModel = require("../../Models/UserSchema/userSchema");
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
const generateToken = require("../../MiddleWear/GenerateToken/GenerateToken");
const generateRefressToken = require("../../MiddleWear/GenerateToken/generateRefressToken");

const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ success: false, message: "Please enter all fields" })
        }

        const user = await UserModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" })
        }

        if (user.status !== "active") {
            return res.status(400).json({ success: false, message: "User is suspended. Contact with Admin." })
        }

        const matchedPassword = await bcryptjs.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(400).json({ success: false, message: "Invalid password" })
        }

        const accessToken = await generateToken(user._id);
        const refreshToken = await generateRefressToken(user._id);
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
        }


        res.cookie('AccessToken', accessToken, cookieOptions)
        res.cookie('RefressToken', refreshToken, cookieOptions)

        const userResponse = user.toObject();
        delete userResponse.password;

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                AccessToken: accessToken,
                RefressToken: refreshToken,
            }
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Login Failed.", error: error.message });
    }
}
module.exports = userLogin;