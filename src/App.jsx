import './App.css'
import useLocalStorage from 'use-local-storage';
// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
// Pages


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
    </div>
  )
}

export default App