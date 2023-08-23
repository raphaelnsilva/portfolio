import {useTypewriter, Cursor} from 'react-simple-typewriter'

import './Home.css';

const Home = () => {

  const [text] = useTypewriter({
    words: ['Desenvolverdor Front-end', 'Web Designer'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 10
  })

  return (
    <>
      <div className='homeContainer'>
        <div className="content">
          <p>HELLO WORLD! 👋🏻</p>
          <h1>Eu sou Raphael,</h1>
          <h3>
            <span>{text}</span>
            <span><Cursor/></span>
          </h3>
          <button className="btn btn-outline">Fale Comigo</button>
        </div>

        <div className="imageContainer">
          <img src="./airplane4.png" alt="Imagem Animada" className="animatedImage" />
        </div>
        
      </div>
    </>
  )
}

export default Home;