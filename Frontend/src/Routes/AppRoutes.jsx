import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'

const AppRoutes = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home></Home>} />
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes