import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <Link to={"/"}>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold font-Exo text-primary-200">Blink<span className='text-green-600'>it</span></h1>
            </Link>
        </div>
    )
}

export default Logo