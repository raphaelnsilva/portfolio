// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Experience from './pages/Experience'
import styled from 'styled-components'

const AppContainer = styled.main`
  min-height: 60vh;
  background-color: var(--color2);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <Projects />
      <About />
      <Experience />      
      <Footer />
    </AppContainer>
  )
}

export default App;