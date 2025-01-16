const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageCloudinary = async (image) => {
    try {

        if (!image) throw new Error("No image provided for upload.");

        const buffer = image?.buffer || Buffer.from(await image.arrayBuffer());

        // Image size validation
        const MAX_SIZE_MB = 5;
        const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

        if (buffer.length > MAX_SIZE_BYTES) {
            throw new Error(`Image size exceeds the maximum allowed size of ${MAX_SIZE_MB}MB.`);
        }

        // Image type validation
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        const imageType = image.mimetype;

        if (!allowedTypes.includes(imageType)) {
            throw new Error(`Invalid image type. Allowed types are: ${allowedTypes.join(', ')}`);
        }

        // Upload the image to Cloudinary
        const uploadImage = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: 'Blinkit' },
                (error, uploadResult) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(uploadResult);
                    }
                }
            ).end(buffer);
        });

        return uploadImage;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw new Error(error.message || "Failed to upload image to Cloudinary");
    }
};

module.exports = uploadImageCloudinary;
