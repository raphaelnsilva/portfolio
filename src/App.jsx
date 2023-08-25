import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
//pages
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
// import Page from './pages/Page'

function App() {
  
  return (
    <>
        <div className="App">
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Experience />
        </div>
        <Footer/>
    </>
  )
}

export default App
