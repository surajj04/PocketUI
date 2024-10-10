import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login'
import CreateAccountPage from './pages/CreateAccountPage'
import ProfilePage from './pages/Profile'
import FeaturesPage from './pages/FeaturesPage'




const App = () => {

  const [isLogin, setLogin] = useState(true);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar isLogin={isLogin} /> <HomePage isLogin={isLogin}/> <Footer /> </>
    },
    {
      path: "/about",
      element: <><Navbar isLogin={isLogin} /> <AboutPage /> <Footer /> </>
    },
    {
      path: "/features",
      element: <><Navbar isLogin={isLogin} /> <FeaturesPage /> <Footer /></>
    },    
    {
      path: "/contact",
      element: <><Navbar isLogin={isLogin} /> <ContactUsPage /> <Footer /> </>
    },
    {
      path: "/login",
      element: <><Navbar isLogin={isLogin} /> <LoginPage /> <Footer /> </>
    },
    {
      path: "/createnew",
      element: <><Navbar isLogin={isLogin} /> <CreateAccountPage /> <Footer /> </>
    }, {
      path: "/profile",
      element: <>
        <Navbar isLogin={isLogin} />
        {isLogin ? <ProfilePage /> : <LoginPage />}
        <Footer />
      </>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App