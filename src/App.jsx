import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { createContext, useState } from 'react';
//pages
import Home from './pages/Home'



export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  };
  
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />
        <div className="container" id={theme}>
          <Home id='home'/>
        </div>
        <Footer/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
