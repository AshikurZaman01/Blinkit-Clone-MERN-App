const jwt = require('jsonwebtoken');

const generateToken = async (userId) => {

    const token = await jwt.sign(
        { id: userId },

        process.env.JWT_SECRET_ACCESS_TOKEN,
        {
            expiresIn: '1d'
        }
    )

    return token;

}
module.exports = generateToken;