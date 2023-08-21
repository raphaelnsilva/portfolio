
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

// HOOKS 
import {useState} from 'react';
// ICONS
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';


const Navbar = () => {

  const [open, setOpen] = useState(false);

  const openIcon = <AiOutlineMenu 
    className={styles.openIcon}
    size='25px' 
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <IoMdClose
    className={styles.closeIcon} 
    size='25px'
    onClick={() => setOpen(!open)}
  />

  return (
    
    <header className={styles.container}>
      <nav className={styles.navbar}>
        <NavLink to="/portfolio/" className={styles.brand}>
          <span>Raphael</span>
        </NavLink>
        {open ? closeIcon : openIcon}
        {open && (
          <>
            <ul className={styles.menu}>
              <NavLink to="/about" onClick={() => setOpen(!open)}>
                <li>Sobre Mim</li>
              </NavLink>
              <NavLink to="/projects" onClick={() => setOpen(!open)}>
                <li>Projetos</li>
              </NavLink>
              <NavLink to="/knowledge " onClick={() => setOpen(!open)}>
                <li>Conhecimentos</li>
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(!open)}>
                <li>Fale Comigo</li>
              </NavLink>
            </ul>
          </>
        )}
      </nav>
    </header>
    
  )
}

export default Navbar;