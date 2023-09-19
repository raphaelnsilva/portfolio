import './App.css'
import useLocalStorage from 'use-local-storage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Experience from './pages/Experience';
import Talktome from './pages/Talktome';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-schema: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)
  })

  const elements = document.querySelectorAll('.hidden')

  elements.forEach((element) => myObserver.observe(element))

  return (
    <div className='App' data-theme={theme}>
      <Header/>
      <Home className='hidden'/>
      <Projects className='hidden'/>
      <About className='hidden'/>
      <Experience className='hidden'/>
      <Talktome className='hidden'/>
      <Footer className='hidden'/>
    </div>
  )
}

export default App