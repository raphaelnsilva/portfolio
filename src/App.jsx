import './App.css'

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Experience from './pages/Experience';
import Talktome from './pages/Talktome'

function App() {

  return (
    <div className='App'>
      <Header />
      <Home />
      <Projects />
      {/* <About />
      <Experience />
      <Talktome /> */}
      <Footer />
    </div>
  )
}

export default App