import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import App from '../App';
import SearchPage from '../Components/Header/SearchBar/items/SearchPage';
import Login from '../Components/Pages/Auth/Login/Login';
import Register from '../Components/Pages/Auth/Register/Register';
import ForgotPassword from '../Components/Pages/Auth/ForgotPassword/ForgotPassword';
import VerifyForgotPasswordOTP from '../Components/Pages/Auth/VerifyForgotPasswordOTP/VerifyForgotPasswordOTP';
import ResetPassword from '../Components/Pages/Auth/ResetPassword/ResetPassword';
import UserMenuMobile from '../Components/Header/UserMenu/UserMenuMobile';

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

    //Auth Routes
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
    },
    {
        path: '/verify-forgot-password-OTP',
        element: <VerifyForgotPasswordOTP />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />
    },
    {
        path: '/userMobile',
        element: <UserMenuMobile></UserMenuMobile>
    }
])

export default router;