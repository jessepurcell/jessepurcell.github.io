import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CallToAction from './CallToAction'
import Features from './Features'
import HowItWorks from './HowItWorks'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar/>
      <CallToAction/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </>
  )
}

export default App
