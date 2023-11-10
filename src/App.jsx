import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//component
import Navbar from './components/navbar'
import Home from './components/Home'
import Certificates from './components/Certificate'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
