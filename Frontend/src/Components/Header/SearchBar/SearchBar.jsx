import { IoSearch } from 'react-icons/io5';
import TextAnimation from './TextAnimation';  

const SearchBar = () => {
    return (
        <div className="min-w-[300px] lg:min-w-[420px] h-12 rounded-lg border border-neutral-300 flex items-center text-neutral-500 overflow-hidden shadow-sm">

            {/* Search Icon Button */}
            <button className="flex justify-center items-center h-full p-3 hover:text-neutral-700">
                <IoSearch size={22} />
            </button>

            {/* Text Animation */}
            <TextAnimation />
        </div>
    );
};

export default SearchBar;
