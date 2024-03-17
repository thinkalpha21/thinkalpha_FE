import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Home } from './pages/home'
import { UserDashboard } from './pages/dashboard'
import { FooterDisplay } from './components/FooterDisplay'
import { Course } from './pages/course'


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

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/" element={<UserDashboard />} />
          <Route path="course/:id/" element={<Course />} />

        </Routes>
        <FooterDisplay />

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App
