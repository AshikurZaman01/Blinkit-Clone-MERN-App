import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import App from '../App';
import SearchPage from '../Components/Header/SearchBar/items/SearchPage';
import Login from '../Components/Pages/Login/Login';

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
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default router;