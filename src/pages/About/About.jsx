import styles from './About.module.css'

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <h2>Sobre <span>Raphael</span></h2>
        <p>Portifolio pessoal para exibição de projetos.</p>
        <Link to="/" className='btn'>
          Projetos
        </Link>
      </div>
    </>
  )
}

export default About;