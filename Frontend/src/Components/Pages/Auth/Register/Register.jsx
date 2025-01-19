import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast"
import Axios from "../../../../Common/BaseApi/Axios";
import { usersAPI } from "../../../../Common/BaseApi/baseAli";

const Register = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    const [isLoading, setIsLoading] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        try {
            if (data.password !== data.confirmPassword) {
                toast.error('Password and confirm password do not match.');
                return;
            }

            const response = await Axios({
                ...usersAPI.register,
                data: data
            })

            if (response.data.success) {
                toast.success(response.data.message);

                setData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                });
                navigate('/login');
            }

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

        finally {
            setIsLoading(false);
        }
    };

    const passwordsMatch = data.password && data.confirmPassword && data.password === data.confirmPassword;

    const isValid = Object.values(data).every((el) => el.trim() !== "");

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">

            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">

                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Create an Account
                </h1>

                <form onSubmit={handleSubmit} className="grid gap-5">

                    <div className="grid gap-2">
                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-600"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoFocus
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.name}
                            onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                            }
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="grid gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-600"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="grid gap-2 relative">
                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-600"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword.password ? "text" : "password"}
                            name="password"
                            id="password"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword((prev) => ({
                                    ...prev,
                                    password: !prev.password,
                                }))
                            }
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-500 focus:outline-none"
                        >
                            {showPassword.password ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="grid gap-2 relative">
                        <label
                            htmlFor="confirmPassword"
                            className="text-sm font-medium text-gray-600"
                        >
                            Confirm Password
                        </label>
                        <input
                            type={showPassword.confirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            id="confirmPassword"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.confirmPassword}
                            onChange={(e) =>
                                setData({ ...data, confirmPassword: e.target.value })
                            }
                            placeholder="Confirm your password"
                        />
                        {passwordsMatch && (
                            <span className="absolute right-10 top-[38px] text-blue-500 text-lg font-bold">
                                ✔
                            </span>
                        )}
                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword((prev) => ({
                                    ...prev,
                                    confirmPassword: !prev.confirmPassword,
                                }))
                            }
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-500 focus:outline-none"
                        >
                            {showPassword.confirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Forgot Password */}
                    <p className="text-sm text-right text-gray-500 mt-0">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >Forgot Password?</Link>
                    </p>

                    <button
                        type="submit" disabled={!isValid}
                        className={`${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"} text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200`}
                    >
                        {isLoading ? <span className="loading loading-dots loading-md"></span> : "Create Account"}
                    </button>



                    <p className="text-sm text-center text-gray-500 mt-4">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Register;
