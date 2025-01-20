import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/AppRoutes.jsx'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store/store.js'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Provider >
  </>
  // </StrictMode>,
)
