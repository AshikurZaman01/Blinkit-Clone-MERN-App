import { Route, BrowserRouter, Routes, createBrowserRouter } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router;