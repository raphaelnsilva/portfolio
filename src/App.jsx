import './App.css'
import useLocalStorage from 'use-local-storage';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Projects from './pages/Projects'
import Experience from './pages/Experience';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-schema: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className='App' data-theme={theme}>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Experience/>
    </div>
  )
}

export default App