
import {NavLink} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import classes from './Navbar.module.css';


const Navbar = () => {
  return (
    <header className={classes.Navigation}>
      <nav className={classes.navbar}>
        <NavLink to="/" className={classes.brand}>
          <span>Raphael</span>
        </NavLink>
        <ul className={classes.links_list}>
          <li>Sobre Mim</li>
          <li>Projetos</li>
          <li>Conhecimentos</li>
          <li>Fale Comigo</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;