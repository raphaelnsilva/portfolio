import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createContext, useState } from 'react';
//pages
import Home from './pages/Home'
import About from './pages/About'


export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter> 
          <div className="container" id={theme}>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
