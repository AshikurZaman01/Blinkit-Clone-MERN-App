import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header></Header>

      <main className='min-h-[78vh]'>
        <Outlet />
      </main>

      <Footer></Footer>
    </>
  )
}

export default App
