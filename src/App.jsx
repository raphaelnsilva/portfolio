// Hooks
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
// Components
{/* import Navigation from './components/Navbar/Navigation' */}
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
