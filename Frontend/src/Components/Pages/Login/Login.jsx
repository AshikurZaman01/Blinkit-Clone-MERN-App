import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <section className="bg-gray-300 min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-xl p-8 max-w-md w-full transform transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
                <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
                    Welcome Back
                </h1>

                <form onSubmit={handleSubmit} className="grid gap-5">
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
                            type={showPassword ? "text" : "password"}
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
                                setShowPassword((prev) => !prev)
                            }
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-blue-500 focus:outline-none"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 hover:shadow-lg focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-200"
                    >
                        Log In
                    </button>

                    <p className="text-sm text-center text-gray-500 mt-4">
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
