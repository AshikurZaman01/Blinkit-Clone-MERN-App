import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../Common/BaseApi/Axios";
import { usersAPI } from "../../../Common/BaseApi/baseAli";
import toast from "react-hot-toast";


const UserMenu = ({ user, onLoginClick }) => {

    const [openUserMenu, setUserMenu] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {

            const response = await Axios({
                ...usersAPI.logout
            })

            if (response.data.success) {
                setUserMenu(false);
                toast.success(response.data.message);
                navigate('/');

            }
            localStorage.setItem('AccessToken', "");
            localStorage.setItem('RefressToken', "");

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            className="relative bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-full text-white transition duration-300 ease-in-out"
            onClick={() => setUserMenu(!openUserMenu)}
        >
            <div className="flex items-center gap-2">
                <FaUser className="w-[20px] h-[20px]" />

                {/* Arrow animation */}
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: openUserMenu ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {openUserMenu ? <GoTriangleUp size={20} /> : <GoTriangleDown size={20} />}
                </motion.div>
            </div>

            {/* Dropdown menu animation */}
            {openUserMenu && (
                <motion.div
                    className="absolute top-16 right-0 bg-white text-gray-800 min-w-[200px] shadow-lg rounded-2xl py-4 px-5 z-50"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="mb-4">
                        <h2 className="font-semibold text-lg text-gray-600">My Account</h2>
                        <p className="text-sm text-gray-500">{user?.name || user?.mobile}</p>
                    </div>

                    <div className="space-y-3">
                        <Link
                            to="/orders"
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            My Orders
                        </Link>
                        <Link
                            to="/address"
                            className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Saved Addresses
                        </Link>

                        {/* Logout button */}
                        <button
                            onClick={handleLogout}
                            className="w-full text-sm text-red-600 hover:bg-red-200 py-2 px-4 rounded-full transition-all duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </motion.div>
            )}
        </button>
    );
};

export default UserMenu;
