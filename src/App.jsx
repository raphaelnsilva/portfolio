import './App.css'
import { useState, useEffect } from 'react'
// Components
import Header from './components/header-component/Header';
import Footer from './components/footer-component/Footer';
// Pages
import Home from './pages/home-page/Home';
import Projects from './pages/projects-page/Projects';
import About from './pages/about-page/About';
import Experience from './pages/experience-page/Experience';



function App() {

  const [theme, setTheme] = useState(() => {
    const defaultDark = window.matchMedia('(prefers-color-schema: dark)').matches;
    return defaultDark ? 'dark' : 'light';
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <Header/>
      <Home className='hidden'/>
      <Projects className='hidden'/>
      <About className='hidden'/>
      <Experience className='hidden'/>
      <Footer className='hidden'/>
    </div>
  )
}

export default App