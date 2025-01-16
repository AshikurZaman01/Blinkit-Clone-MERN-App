const UserModel = require("../../Models/UserSchema/userSchema");
const jwt = require('jsonwebtoken');

const generateRefressToken = async (userId) => {

    const token = await jwt.sign(

        { id: userId },

        process.env.JWT_SECRET_ACCESS_TOKEN,
        {
            expiresIn: '30d'
        }
    )

    await UserModel.findByIdAndUpdate(userId, { refresh_token: token }, { new: true });

    return token;
}

module.exports = generateRefressToken;