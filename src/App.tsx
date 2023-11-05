import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Home } from './pages/home'


const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins', 'sans-serif',
    ].join(','),
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  )
}

export default App
