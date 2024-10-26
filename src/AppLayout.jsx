import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Popup from './components/popup/Popup'
const AppLayout = () => {
  return (
    <div>
        <Popup />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout