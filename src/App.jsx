import './App.css'
import useLocalStorage from 'use-local-storage';

// Components
import Navbar from './components/Navbar';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
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