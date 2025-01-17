import Cart from "./Cart"
import Login from "./Login"
import Logo from "./Logo"
import SearchBar from "./SearchBar/SearchBar"

const Header = () => {
    return (
        <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center items-center gap-1 bg-white">

            <div className="container mx-auto flex justify-between">

                <Logo></Logo>

                <SearchBar></SearchBar>

                <div className="flex justify-between items-center gap-5">
                    <Login></Login>
                    <Cart></Cart>
                </div>

            </div>


        </header>
    )
}

export default Header