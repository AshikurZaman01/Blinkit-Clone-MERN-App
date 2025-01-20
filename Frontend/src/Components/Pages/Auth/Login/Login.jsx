import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Axios from "../../../../Common/BaseApi/Axios";
import toast from "react-hot-toast";
import { usersAPI } from "../../../../Common/BaseApi/baseAli";

const Login = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const isValid = Object.values(data).every((el) => el.trim() !== "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await Axios({
                ...usersAPI.login,
                data: data
            })

            if (response.data.success) {
                toast.success(response.data.message);

                localStorage.setItem("AccessToken", response?.data?.data?.AccessToken);
                localStorage.setItem("RefressToken", response?.data?.data?.RefressToken);

                setData({
                    email: "",
                    password: ""
                })
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">

            <div className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 lg:p-12 max-w-md w-full sm:max-w-[90%] md:max-w-lg lg:max-w-md transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">

                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Welcome To <span className="text-primary-200">Blink<span className='text-green-600'>it</span></span>
                </h1>

                <form onSubmit={handleSubmit} className="grid gap-5">

                    {/* Email Input */}
                    <div className="grid gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm sm:text-base font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input with View Toggle */}
                    <div className="grid gap-2 relative">
                        <label
                            htmlFor="password"
                            className="text-sm sm:text-base font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] sm:top-[44px] text-gray-500 hover:text-blue-500 focus:outline-none"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <p className="text-sm text-right text-gray-500 mt-0">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >Forgot Password?</Link>
                    </p>

                    {/* Submit Button */}
                    <button
                        type="submit" disabled={!isValid}
                        className={`${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"} text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200`}
                    >
                        {isLoading ? <span className="loading loading-dots loading-md"></span> : " Log In"}
                    </button>

                    {/* Footer */}
                    <p className="text-sm sm:text-base text-center text-gray-500 mt-4">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
