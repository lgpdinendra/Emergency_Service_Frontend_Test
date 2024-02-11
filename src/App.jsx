//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Profile from './Components/Profile'
import PublicUserLogin from './Components/PublicUserLogin'
import Register from './Components/Register'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route  path="/" element={<PublicUserLogin/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </Router>
    {/* <PublicUserLogin/> */}
    </>
  )
}

export default App
