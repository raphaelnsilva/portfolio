import styles from '../styles/Header.module.css';
import {useState} from 'react';
import {Link} from 'react-scroll';

// icons 
import {AiOutlineMenu, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';
import Switch from './Switch';

const Header = () => {

  const openIcon = <AiOutlineMenu 
    className={styles.open_icon}
    size='25px' 
    onClick={() => setOpen(!open)}/>

  const closeIcon = <IoMdClose
    className={styles.close_icon}
    size='25px'
    onClick={() => setOpen(!open)}/>

  const gitIcon = <AiFillLinkedin 
    className={styles.social_icons}
    size='30px'/>
    
  const linkedinIcon = <AiFillGithub 
    className={styles.social_icons}
    size='30px'/>

  const [open, setOpen] = useState(false);
    
  return (
    <header className={styles.header}>
      <Link
        data-aos="fade-down" 
        to='home'
        smooth={true} 
        duration={500} 
        className={styles.brand}>
       <span>Raphael</span>
      </Link>

      <Switch/>

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
            {/* <Link onClick={() => setOpen(!open)}
              to='talktome'
              smooth={true}
              duration={500}
            ><li>Fale Comigo</li>
            </Link> */}
            <div className={styles.icons_mobile}>
              <a href='https://github.com/raphaelnsilva' 
                target='_blank'>{gitIcon}</a>
              <a href='https://github.com/raphaelnsilva' 
                target='_blank'>{linkedinIcon}</a>
            </div>
          </ul>
        </>
      )}

      <ul className={styles.menu_desktop}>

        <Link 
          data-aos="fade-down"
          to='projects'
          smooth={true} 
          duration={500}
          onClick={() => setOpen(!open)}>
          <li>Projetos</li>
        </Link>

        <Link 
          data-aos="fade-down"
          to='about'
          smooth={true} 
          duration={500}
          onClick={() => setOpen(!open)}>
          <li>Sobre Mim</li>
        </Link>

        <Link  
          data-aos="fade-down"
          to='experience' 
          smooth={true} 
          duration={500}
          onClick={() => setOpen(!open)}>
          <li>Conhecimentos</li>
        </Link>

        {/* <Link 
          data-aos="fade-down"
          to='talktome' 
          smooth={true} 
          duration={500}
          onClick={() => setOpen(!open)}>
          <li>Fale Comigo</li>
        </Link> */}
      </ul>
      
      <div className={styles.icons_desktop}>
        <a href='https://github.com/raphaelnsilva' target='_blank' data-aos="fade-down">
          {gitIcon}
        </a>
        <a href='https://www.linkedin.com/in/raphaelsilvaa' target='_blank' data-aos="fade-down">{linkedinIcon}
        </a>
      </div>

    </header>
    
    
  )
}

export default Header;