import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "../../../../Common/BaseApi/Axios";
import { usersAPI } from "../../../../Common/BaseApi/baseAli";

const VerifyForgotPasswordOTP = () => {
    const [data, setData] = useState({
        email: "",
        otp: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await Axios({
                ...usersAPI.verifyForgotPasswordOTP,
                data: {
                    email: data.email,
                    otp: data.otp,
                },
            });

            if (response.data.success) {
                toast.success(response.data.message);

                setData({
                    email: "",
                    otp: "",
                });

                navigate("/reset-password", {
                    state: {
                        data: response.data,
                        email: data.email,
                    },
                });
                setIsLoading(false);
            } else {
                toast.error(response.data.message || "Failed to verify OTP.");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = data.email.trim() && data.otp.trim();

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Verify OTP
                </h1>

                <form onSubmit={handleSubmit} className="grid gap-5">
                    {/* Email Input */}
                    <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* OTP Input */}
                    <div className="grid gap-2">
                        <label htmlFor="otp" className="text-sm font-medium text-gray-600">
                            OTP
                        </label>
                        <input
                            type="text"
                            name="otp"
                            id="otp"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.otp}
                            onChange={(e) => setData({ ...data, otp: e.target.value })}
                            placeholder="Enter the OTP sent to your email"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!isFormValid || isLoading}
                        className={`${isFormValid && !isLoading
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-400 cursor-not-allowed"
                            } text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200`}
                    >
                        {isLoading ? (
                            <span className="loading loading-dots loading-md"></span>
                        ) : (
                            "Verify OTP"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default VerifyForgotPasswordOTP;
