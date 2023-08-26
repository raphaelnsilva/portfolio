import './Footer.css'
import {FiGithub,FiLinkedin} from 'react-icons/fi';

const Footer = () => {

  const gitIcon = <FiGithub
    className='gitIcon'
    size='40px'
  />
  const linkedinIcon = <FiLinkedin
    className='linkedinIcon'
    size='40px'
  />

  return (
    <footer className='footer'>
      <div>
        <h3>Raphael</h3>
        <p>&copy;2023 por Raphael Nunes Silva.</p>
        <p>Todos os direitos reservados.</p>
        <p>v0.1</p>
      </div>
      <div className="iconsFooter">
        <a href='https://github.com/raphaelnsilva' 
          target='_blank'>
          <li>{gitIcon}</li>
        </a>
        <a href='https://github.com/raphaelnsilva' 
          target='_blank'>
          <li>{linkedinIcon}</li>
        </a>
      </div>
    </footer>
  )
}

export default Footer