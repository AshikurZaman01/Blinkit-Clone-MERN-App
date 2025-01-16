const generateOTP = async () => {

    const otp = Math.floor(100000 + Math.random() * 900000); // 6 digit otp

    return otp;
}

module.exports = generateOTP;
