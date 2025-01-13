const bcryptjs = require('bcryptjs');
const UserModel = require('../../Models/UserSchema/userSchema');

const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Input Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide all the required fields"
            });
        }

        // Check if User Already Exists
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash Password
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Create User
        const newUser = await UserModel.create({
            name,
            email,
            password: hashedPassword
        });

        // Convert user to object and remove password
        const userResponse = newUser.toObject();
        delete userResponse.password;

        // Send Success Response Without Password
        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: userResponse
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User Registration Failed",
            error: error.message
        });
    }
};

module.exports = userRegister;