
const userLogout = async (req, res) => {
    try {
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
        }

        res.clearCookie('AccessToken', cookieOptions);
        res.clearCookie('RefressToken', cookieOptions);

        res.status(200).json({
            message: "User Logout Successfully",
            success: true
        })

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message
        });
    }
}

module.exports = userLogout;