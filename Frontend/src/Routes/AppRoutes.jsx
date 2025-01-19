import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import App from '../App';
import SearchPage from '../Components/Header/SearchBar/items/SearchPage';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
import ForgotPassword from '../Components/Pages/ForgotPassword/ForgotPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/search',
                element: <SearchPage />
            },

        ]
    },

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />
    }
])

export default router;