import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Axios from "../../../../Common/BaseApi/Axios";
import { usersAPI } from "../../../../Common/BaseApi/baseAli";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await Axios({
                ...usersAPI.forgotPassword,
                data: { email },
            })

            if (response.data.success) {
                toast.success(response.data.message);
                setEmail('');
                navigate('/verify-forgot-password-OTP')
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        finally {
            isLoading(false);
        }
    };

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">

            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">

                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Forgot Password
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!email}
                        className={`${email
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-400 cursor-not-allowed"
                            } text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200`}
                    >
                        {isLoading ? (
                            <span className="loading loading-dots loading-md"></span>
                        ) : (
                            "Send Reset Link"
                        )}
                    </button>

                    {/* Back to Login */}
                    <p className="text-sm text-center text-gray-500 mt-4">
                        Remembered your password?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
