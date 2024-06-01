// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import DotCursor from './Components/DotCursor/DotCursor'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    
    <div className="main">
      <Navbar/>
      <Outlet/>
      <DotCursor/>
    </div>
  )
}

export default App