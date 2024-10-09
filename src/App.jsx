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




const App = () => {

  const [isLogin,setLogin] = useState(true);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar isLogin={isLogin}/> <HomePage /> <Footer /> </> 
    },
    {
      path: "/about",
      element: <><Navbar isLogin={isLogin}/> <AboutPage /> <Footer /> </> 
    },
    {
      path: "/contact",
      element:<><Navbar isLogin={isLogin}/> <ContactUsPage /> <Footer /> </> 
    },
    {
      path: "/login",
      element:<><Navbar isLogin={isLogin}/> <LoginPage /> <Footer /> </> 
    },
    {
      path: "/createnew",
      element:<><Navbar isLogin={isLogin}/> <CreateAccountPage /> <Footer /> </> 
    },{
      path: "/profile",
      element:<><Navbar isLogin={isLogin}/> <ProfilePage /> <Footer /> </> 
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App