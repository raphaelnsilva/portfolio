import styles from '../styles/Footer.module.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import packageJson from '../../package.json';

const generateIcon = (IconComponent) => (
  <IconComponent size='30px' />
);

const Footer = () => {
  return (
    <main className={styles.footer}>
      <section className={styles.contentFooter}>
        <p>&copy; 2023 por Raphael Nunes Silva.</p>
        <p>Todos os direitos reservados.</p>
        <p>v{packageJson.version}</p>
      </section>
      <section className={styles.iconsFooter}>
        <a 
          href='https://github.com/raphaelnsilva'
          target='_blank'>
          {generateIcon(AiFillGithub)}
        </a>
        <a 
          href='https://www.linkedin.com/in/raphaelsilvaa/'
          target='_blank'>
          {generateIcon(AiFillLinkedin)}
        </a>
      </section>
    </main>
  )
}

export default Footer;