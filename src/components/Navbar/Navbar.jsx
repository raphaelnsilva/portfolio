
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

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
    className={classes.menuIcon}
    size='25px' 
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <IoMdClose
    className={classes.closeIcon} 
    size='25px'
    onClick={() => setOpen(!open)}
  />

  return (
    
    <nav className={classes.navbar}>
      <NavLink to="/" className={classes.brand}><span>Raphael</span></NavLink>
      {open ? closeIcon : openIcon}
      {open && (
        <>
          <ul className={classes.menu}>
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
    
  )
}

export default Navbar;