import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { CssBaseline } from '@mui/material'
import { Home } from './pages/home'

function App() {

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
    </>
  )
}

export default App
