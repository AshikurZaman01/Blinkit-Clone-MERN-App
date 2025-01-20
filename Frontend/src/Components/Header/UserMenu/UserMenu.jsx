import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { motion } from "framer-motion"; 

const UserMenu = ({ user, onLoginClick }) => {

    const [openUserMenu, setUserMenu] = useState(false);
    console.log(user);

    return (
        <button
            className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition"
            onClick={() => setUserMenu(!openUserMenu)}
        >
            <div className="relative">
                <div className="flex items-center gap-2">
                    <FaUser className="w-[20px] h-[20px]" />

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
                        className="absolute -left-20 top-14 bg-white min-w-52 shadow-lg border rounded-md py-2 px-3 z-50 lg:shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            <li className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
                                <span>My Profile</span>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </div>
        </button>
    );
};

export default UserMenu;
