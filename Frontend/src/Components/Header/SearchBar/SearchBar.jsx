import { IoSearch } from 'react-icons/io5';
import TextAnimation from './items/TextAnimation';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isSearchPage, setIsSearchPage] = useState(false);

    useEffect(() => {
        const search = location.pathname === '/search';
        setIsSearchPage(search);
    }, [location]);

    const redirectToSearchPage = () => {
        navigate('/search');
    };

    return (
        <div className="min-w-[250px] md:min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border border-neutral-300 flex items-center overflow-hidden shadow-sm text-gray-400 bg-slate-50 group focus-within:border-primary-200">

            {/* Search Icon Button */}
            <button className="flex justify-center items-center h-full p-3 text-neutral-700 group-focus-within:text-primary-200">
                <IoSearch md:size={22} />
            </button>

            <div className='w-full h-full flex items-center'>
                {
                    !isSearchPage ? (
                        <div onClick={redirectToSearchPage} className="cursor-pointer">
                            <TextAnimation />
                        </div>
                    ) : (
                        <div className='w-full h-full'>
                            <input type="text"
                                placeholder='Search for atta and more...'
                                autoFocus={true}
                                className='bg-transparent w-full h-full outline-none'
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SearchBar;
