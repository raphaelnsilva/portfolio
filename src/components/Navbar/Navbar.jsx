
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
    <header className={classes.header}>
      <NavLink to="/" className={classes.brand}><span>Raphael</span></NavLink>
      <nav className={classes.MoileNavigation}>
      {open ? closeIcon : openIcon}
      {open && (
        <>
          <ul className={classes.menu}>
            <NavLink to="/about">
              <li>Sobre Mim</li>
            </NavLink>
            <li>Projetos</li>
            <li>Conhecimentos</li>
            <li>Fale Comigo</li>
          </ul>
        </>
        
      )}
      </nav>
    </header>
  )
}

export default Navbar;