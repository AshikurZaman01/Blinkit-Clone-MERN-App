const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.MONGODB_CONN_URL) {
    throw new Error("MONGODB_CONN_URL is not defined");
}

const connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGODB_CONN_URL)
        console.log("MongoDB Connected")

    } catch (error) {
        console.log("MongoDB Connection Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;