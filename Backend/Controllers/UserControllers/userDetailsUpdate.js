const UserModel = require("../../Models/UserSchema/userSchema");
const bcrypt = require("bcryptjs");

const userDetailsUpdate = async (req, res) => {
    try {
        const userId = req.userId;
        const { name, email, mobile, password, oldPassword } = req.body;

        // Check if the user exists
        const user = await UserModel.findById(userId).select("+password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Check if updating the password
        let hashPassword = user.password;
        if (password) {
            if (!oldPassword) {
                return res.status(400).json({ success: false, message: "Old password is required to update your password." });
            }

            const isMatch = await bcrypt.compare(oldPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ success: false, message: "Old password is incorrect." });
            }

            hashPassword = await bcrypt.hash(password, 10);
        }

        // Update user details
        const updatedUser = await UserModel.findByIdAndUpdate(
            userId,
            {
                ...(name && { name }),
                ...(email && { email }),
                ...(mobile && { mobile }),
                ...(password && { password: hashPassword }),
            },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(400).json({ success: false, message: "User update failed." });
        }

        // Remove password from response
        const userResponse = updatedUser.toObject();
        delete userResponse.password;

        return res.status(200).json({
            success: true,
            message: "User details updated successfully.",
            data: userResponse
        });

    } catch (error) {
        console.error("Error updating user details:", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while updating user details.",
            error: error.message
        });
    }
}

module.exports = userDetailsUpdate;
