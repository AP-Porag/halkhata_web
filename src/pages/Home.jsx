import React from 'react'
import Navbar from '../components/customer/Navbar'
import Dashboard from '../views/customer/Dashboard'
import Footer from "../components/common/Footer.jsx";

export default function Home() {
  return (
      <div className="bg-blue-50 h-screen">
        <Navbar/>
        <Dashboard/>
        <Footer/>
      </div>
  )
}
