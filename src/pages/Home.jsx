import React from 'react'
import Navbar from '../components/customer/Navbar'
import Dashboard from '../views/customer/Dashboard'
import Sidebar from '../components/common/Sidebar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}
