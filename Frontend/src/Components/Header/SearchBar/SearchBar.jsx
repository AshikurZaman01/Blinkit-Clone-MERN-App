import { IoSearch } from 'react-icons/io5';
import TextAnimation from './items/TextAnimation';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import useMobile from '../../../hooks/useMobile';

const SearchBar = () => {

    const isMobile = useMobile();
    const navigate = useNavigate();
    const location = useLocation();
    const [isSearchPage, setIsSearchPage] = useState(false);

    useEffect(() => {
        setIsSearchPage(location.pathname === '/search');
    }, [location]);

    const redirectToSearchPage = () => {
        navigate('/search');
    };

    return (
        <div className="min-w-[250px] md:min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border border-neutral-300 flex items-center overflow-hidden shadow-sm text-gray-400 bg-slate-50 group focus-within:border-primary-200">

            <div>
                {isMobile && isSearchPage ? (

                    // Go Back Icon Button
                    <button
                        className="flex justify-center items-center h-full p-2 m-1 text-neutral-700 group-focus-within:text-primary-200 bg-white rounded-full shadow-md transition-all duration-200 hover:bg-primary-100 hover:text-primary-500"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft size={20} />
                    </button>

                ) : (

                    // Search Icon Button
                    <button className="flex justify-center items-center h-full p-3 text-neutral-700 group-focus-within:text-primary-200">
                        <IoSearch size={22} />
                    </button>

                )}
            </div>

            {/* Search Bar Section */}
            <div className='w-full h-full flex items-center'>
                {!isSearchPage ? (
                    // Text Animation when not on Search Page
                    <div onClick={redirectToSearchPage} className="cursor-pointer w-full h-full flex items-center">
                        <TextAnimation />
                    </div>
                ) : (
                    // Input Field when on Search Page
                    <input
                        type="text"
                        placeholder="Search for atta and more..."
                        autoFocus={true}
                        className="bg-transparent w-full h-full outline-none px-2"
                    />
                )}
            </div>

        </div>
    );
};

export default SearchBar;
