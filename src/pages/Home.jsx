import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-scroll';
import { useEffect, useRef, useState} from 'react';
import styles from './modules/Home.module.css';

const Home = () => {

  const [text] = useTypewriter({
    words: ['Programador Full-Stack', 'Amante de tecnologia', 'Estudante De Tecnologia'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 10
  })

  return (
    <section id='home'>
      <main className={styles.main}>
        <div className={styles.typewriter}>
          <p>HELLO WORLD! 👋🏻</p>
          <h1>Eu sou Raphael,</h1>
          <h3>
            <span>{text}</span>
            <span><Cursor/></span>
          </h3>
        </div>
        <Link className={styles.btn}
          to='talktome'
          smooth={true}
          duration={500}>
          <span>Fale Comigo</span>
        </Link>
      </main>
    </section>
  )
}

export default Home;