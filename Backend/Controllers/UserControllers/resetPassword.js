const UserModel = require("../../Models/UserSchema/userSchema");
const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body;

        // Validate input
        if (!email || !newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match." });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password in the database
        const updatePassword = await UserModel.findOneAndUpdate(
            { email },
            { password: hashedPassword },
            { new: true }
        );

        if (!updatePassword) {
            return res.status(500).json({ success: false, message: "Failed to update password." });
        }

        res.status(200).json({ success: true, message: "Password updated successfully." });

    } catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).json({ success: false, message: "An error occurred.", error: error.message });
    }
};

module.exports = resetPassword;
