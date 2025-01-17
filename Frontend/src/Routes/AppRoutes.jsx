import { Route, BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import App from '../App';
import SearchPage from '../Components/Header/SearchBar/items/SearchPage';

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
            }
        ]
    }
])

export default router;