import './App.css'
// Components
import Header from './components/header/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
// import About from './pages/about/About'
import Experience from './pages/Experience'

function App() {
  return (
    <main className='App'>
      <Header />
      <Home />
      <Projects />
      {/* <About /> */}
      <Experience />      
      <Footer />
    </main>
  )
}

export default App