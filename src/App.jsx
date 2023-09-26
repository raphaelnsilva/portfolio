import './App.css'
import useLocalStorage from 'use-local-storage';

// Components
import Header from './components/header-component/Header';
import Footer from './components/footer-component/Footer';
// Pages
import Home from './pages/home-page/Home';
import Projects from './pages/projects-page/Projects';
import About from './pages/about-page/About';
import Experience from './pages/experience-page/Experience';
import Talktome from './pages/talktome-page/Talktome';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-schema: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  return (
    <div className='App' data-theme={theme}>
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