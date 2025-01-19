import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
   
    const [data, setData] = useState({
        email: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
       
        if (!(location?.state?.data?.success)) {
            navigate("/");
        }

        // Set email from state if available
        if (location?.state?.email) {
            setData((prev) => ({
                ...prev,
                email: location?.state?.email,
            }));
        }
    }, [location, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.newPassword !== data.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Password reset data:", data);
       
    };

    const passwordsMatch =
        data.newPassword &&
        data.confirmPassword &&
        data.newPassword === data.confirmPassword;

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Reset Your Password
                </h1>

                <form onSubmit={handleSubmit} className="grid gap-5">
                    {/* Email Field */}
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
                            readOnly
                        />
                    </div>

                    {/* New Password Field */}
                    <div className="grid gap-2 relative">
                        <label
                            htmlFor="newPassword"
                            className="text-sm font-medium text-gray-600"
                        >
                            New Password
                        </label>
                        <input
                            type={showPassword.newPassword ? "text" : "password"}
                            name="newPassword"
                            id="newPassword"
                            className="bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm hover:shadow-md transition-all"
                            value={data.newPassword}
                            onChange={handleChange}
                            placeholder="Enter your new password"
                            required
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword((prev) => ({
                                    ...prev,
                                    newPassword: !prev.newPassword,
                                }))
                            }
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-500 focus:outline-none"
                        >
                            {showPassword.newPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {/* Confirm Password Field */}
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
                            onChange={handleChange}
                            placeholder="Confirm your new password"
                            required
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

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={
                            !data.newPassword ||
                            !data.confirmPassword ||
                            data.newPassword !== data.confirmPassword
                        }
                        className={`${passwordsMatch
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-gray-400 cursor-not-allowed"
                            } text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200`}
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;
