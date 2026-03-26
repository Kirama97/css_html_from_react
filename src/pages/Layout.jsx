import React from 'react'
import Navbar from './../composents/Navbar';
import Footer from './../composents/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
       <Navbar/>
         <main>
            <Outlet/>
         </main>
       <Footer/>
    </div>
  )
}

export default Layout

























