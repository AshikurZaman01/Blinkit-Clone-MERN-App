import useMobile from "../../hooks/useMobile"
import Cart from "./Cart"
import Login from "./Login"
import Logo from "./Logo"
import SearchBar from "./SearchBar/SearchBar"
import { FaRegCircleUser } from "react-icons/fa6"
import { useLocation } from 'react-router-dom';

const Header = () => {

    const isMobile = useMobile();
    const location = useLocation();

    const isSearchPage = location.pathname === "/search";

    return (
        <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center items-center gap-1 bg-white">

            {
                !(isSearchPage && isMobile) && (

                    <div className="container mx-auto flex justify-between items-center px-3 lg:px-0 md:px-3">

                        <Logo></Logo>

                        <div className="hidden lg:block">
                            <SearchBar></SearchBar>
                        </div>

                        <div>
                            <button className="block lg:hidden">
                                <FaRegCircleUser size={25} className=" text-neutral-500"></FaRegCircleUser>
                            </button>

                            <div className="hidden lg:block">
                                <div className="flex justify-between items-center gap-5 ">
                                    <Login></Login>
                                    <Cart></Cart>
                                </div>
                            </div>

                        </div>

                    </div>

                )
            }

            <div className="container mx-auto px-2 lg:hidden">
                <SearchBar></SearchBar>
            </div>

        </header>
    )
}

export default Header