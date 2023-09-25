import styles from './Footer.module.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {

  const gitIcon = <AiFillLinkedin 
  className={styles.social_icons}
  size='30px'/>
  const linkedinIcon = <AiFillGithub 
  className={styles.social_icons}
  size='30px'/>

  return (
    <footer className={styles.footer}>
        <div>
          <h3>Raphael</h3>
          <p>&copy;2023 por Raphael Nunes Silva.</p>
          <p>Todos os direitos reservados.</p>
          <p>v0.1</p>
        </div>
        <div className={styles.icons_footer}>
          <a href='https://github.com/raphaelnsilva'
            target='_blank'>
            {gitIcon}
          </a>
          <a href='https://www.linkedin.com/in/raphaelsilvaa/'target='_blank'>
            {linkedinIcon}
          </a>
        </div>
      
    </footer>
  )
}

export default Footer