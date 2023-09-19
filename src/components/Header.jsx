import styles from './modules/Header.module.css';
// HOOKS 
import {useState} from 'react';
import { Link } from 'react-scroll';
// ICONS
import {FiGithub,FiLinkedin} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
import Switch from './Switch'

const Header = () => {

  const [open, setOpen] = useState(false);

  const openIcon = <AiOutlineMenu 
    className={styles.open_icon}
    size='25px' 
    onClick={() => setOpen(!open)}
  />
  const closeIcon = <IoMdClose
    className={styles.close_icon}
    size='25px'
    onClick={() => setOpen(!open)}
  />
  const gitIcon = <FiGithub size='25px'/>
  const linkedinIcon = <FiLinkedin size='25px'/>

  return (
  
    <nav className={styles.navbar}>
      <Link to='home'
       smooth={true} 
       duration={500} 
      className={styles.brand}>
       <span>Raphael</span>
      </Link>
      <Switch/>
      <ul className={styles.menu_desktop}>
        <Link onClick={() => setOpen(!open)}
          to='projects'
          smooth={true} 
          duration={500}>
          <li>Projetos</li>
        </Link>
        <Link onClick={() => setOpen(!open)}
          to='about'
          smooth={true} 
          duration={500}>
          <li>Sobre Mim</li>
        </Link>
        <Link onClick={() => setOpen(!open)} 
          to='experience' 
          smooth={true} 
          duration={500}>
          <li>Conhecimentos</li>
        </Link>
        <Link onClick={() => setOpen(!open)} 
          to='talktome' 
          smooth={true} 
          duration={500}>
          <li>Fale Comigo</li>
        </Link>
      </ul>
      
      <div className={styles.icons_desktop}>
        <a href='https://github.com/raphaelnsilva' target='_blank'>{gitIcon}</a>
        <a href='https://github.com/raphaelnsilva' target='_blank'>{linkedinIcon}</a>
      </div>

      {open ? closeIcon : openIcon}
      {open && (
        <>
          <ul className={styles.menu}>
            <Link onClick={() => setOpen(!open)}
              to='about' 
              smooth={true} 
              duration={500}>
              <li>Sobre Mim</li>
            </Link>
            <Link onClick={() => setOpen(!open)}  
              to='projects'   
              smooth={true} 
              duration={500}
            ><li>Projetos</li>
            </Link>
            <Link onClick={() => setOpen(!open)}
              to='experience' 
              smooth={true} 
              duration={500}
            ><li>Conhecimentos</li> 
            </Link>
            <Link onClick={() => setOpen(!open)}
              to='talktome'
              smooth={true}
              duration={500}
            ><li>Fale Comigo</li>
            </Link>
            <div className={styles.icons_mobile}>
              <a href='https://github.com/raphaelnsilva' 
                target='_blank'>{gitIcon}</a>
              <a href='https://github.com/raphaelnsilva' 
                target='_blank'>{linkedinIcon}</a>
            </div>
          </ul>
        </>
      )}
    </nav>
    
    
  )
}

export default Header;