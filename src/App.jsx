// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div className="main">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App