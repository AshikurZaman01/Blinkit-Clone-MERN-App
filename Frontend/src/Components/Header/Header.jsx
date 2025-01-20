import useMobile from "../../hooks/useMobile";
import Logo from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import { FaRegCircleUser } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu/UserMenu";

const Header = () => {
    const user = useSelector((state) => state.User.data);

    // Custom hook to check if the device is mobile
    const isMobile = useMobile();

    const location = useLocation();
    const navigate = useNavigate();
    const isSearchPage = location.pathname === "/search";

    const redirectToLoginPage = () => {
        navigate("/login");
    }

    return (
        <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center items-center gap-1 bg-white">
            {
                !(isSearchPage && isMobile) && (

                    <div className="container mx-auto flex justify-between items-center px-3 lg:px-0 md:px-3">
                        {/* Website Logo Section */}
                        <Logo />

                        {/* Search bar for large screens */}
                        <div className="hidden lg:block">
                            <SearchBar />
                        </div>

                        {/* User and Cart Section */}
                        <div>
                            {/* User icon for mobile */}
                            <button onClick={redirectToLoginPage} className="block lg:hidden">
                                <FaRegCircleUser size={25} className="text-neutral-500" />
                            </button>

                            {/* User and Cart for larger screens */}
                            <div className="hidden lg:block">

                                <div className="flex justify-between items-center gap-5">

                                    {/* Account or Login */}
                                    {user?._id ? (
                                        <UserMenu user={user} onLoginClick={redirectToLoginPage} />
                                    ) : (
                                        <button
                                            onClick={redirectToLoginPage}
                                            className="bg-gray-500 px-4 py-2 rounded text-white hover:bg-gray-600 transition"
                                        >
                                            Login
                                        </button>
                                    )}

                                    {/* Cart Button with bounce animation and hover effect */}
                                    <button className="flex items-center gap-2 bg-green-800 px-3 py-3 rounded text-white hover:bg-green-700 transition-colors duration-300">
                                        <div className="animate-bounce">
                                            <BsCart4 size={25} />
                                        </div>
                                        <div>
                                            <p>My Cart</p>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Mobile Search Bar (Always visible on mobile) */}
            <div className="container mx-auto px-2 lg:hidden">
                <SearchBar />
            </div>

        </header>
    );
}

export default Header;
