const UserModel = require("../../Models/UserSchema/userSchema");
const uploadImageCloudinary = require("../../Utils/CloudinaryUploadImage/uploadImageCloudinary");

const uploadUserImage = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({ message: "No image provided." });
        }

        const image = req.file;
        const uploadResult = await uploadImageCloudinary(image);

        const userId = req.userId;

        const updateUserImage = await UserModel.findByIdAndUpdate(userId,
            { avatar: uploadResult.secure_url },
            { new: true }
        );

        if (!updateUserImage) {
            return res.status(404).json({ message: "User not found." });
        }

        return res.status(200).json({
            message: "Image Uploaded Successfully",
            url: uploadResult.secure_url
        });

    } catch (error) {
        console.error("Image Upload Error:", error);
        return res.status(500).json({
            message: "Failed to upload image",
            error: error.message
        });
    }
};

module.exports = uploadUserImage;