import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SatvikWellnessLanding from './Pages/SatvikWellnessLanding'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { MenubarDemo } from './CustomComponents/Navbar'
import Navbar from './CustomComponents/Navbar'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      {/* <SatvikWellnessLanding />  */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SatvikWellnessLanding />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
