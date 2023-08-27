import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {

  const [text] = useTypewriter({
    words: ['Desenvolverdor Front-end', 'Web Designer', 'Estudante De Tecnologia'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 10
  })

  return (
    <section id='home'>
      <div className='homeContainer'>
        <div className="typewriter">
          <p>HELLO WORLD! 👋🏻</p>
          <h1>Eu sou Raphael,</h1>
          <h3>
            <span>{text}</span>
            <span><Cursor/></span>
          </h3>
          <Link to='talktome'
            smooth={true} 
            duration={500}>
            <button className="btn btn-outline">
              Fale Comigo
            </button>
          </Link>
        </div>
        <div className="imageContainer">
          <img src="./airplane4.png" alt="airplane" className="animatedImage" />
        </div>
      </div>
    </section>
  )
}

export default Home;