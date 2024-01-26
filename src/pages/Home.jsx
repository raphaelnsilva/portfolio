import * as React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import styled from 'styled-components'

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color2);
  background-image: url("./background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
const Typewriter  = styled.div`
  text-align: center;
  color: #F6FCFF;
  h1 {
    font-size: 40px
  }
  h3 {
    padding-bottom: 30px;
  }
  @media (min-width: 1024px) {
    text-align: left;
    p {
      margin: 0;
    }
    h1 {
      font-size: 3rem;
      margin: 10px 0 10px 0;
    }
    h3 {
      font-size: 30px;
      margin: 10px 0 10px 0;
    }
  }
`

const HomeLink = styled.div`
  margin-top: 5rem;
  span {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.5;
    color: var(--color3);
    background-color: var(--color1);
    box-shadow: inset 0 0 0 0 var(--color3);
    padding: 1rem;
    transition: color .3s ease-in-out, 
    box-shadow .3s ease-in-out;
  }
  span:hover {
    color: var(--color1);
    box-shadow: inset 200px 0 0 0 var(--color3);;
  }
`

const Home = () => {
  const [text] = useTypewriter({
    words: ['Desenvolvedor Full Stack', 'Amante de tecnologia', 'Desenvolvedor Front End', 'Desenvolvedor Back End'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 10
  })

  return (
    <React.Fragment>
      <HomeContainer id='home'>
        <Typewriter data-aos="fade-left">
          <p>HELLO WORLD! 👋🏻</p>
          <h1>Eu sou Raphael,</h1>
          <h3>
            <span>{text}</span>
            <span><Cursor/></span>
          </h3>
        </Typewriter>
        <HomeLink>
          <Link
            data-aos="fade-right"
            to='projects'
            smooth={true}
            duration={500}
          >
            <span>Ver projetos</span>
          </Link>
        </HomeLink>
      </HomeContainer>
    </React.Fragment>
  )
}

export default Home