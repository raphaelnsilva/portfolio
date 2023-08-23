
import './Navbar.css';
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
    className='openIcon'
    size='25px' 
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <IoMdClose
    className='closeIcon'
    size='25px'
    onClick={() => setOpen(!open)}
  />

  return (
      <nav className='navbar'>
        <a href='#home' className='brand'>
          <span>Raphael</span>
        </a>
        <ul className='menuDesktop'>
          <a onClick={() => setOpen(!open)}>
            <li>Sobre Mim</li>
          </a>
          <a  onClick={() => setOpen(!open)}>
            <li>Projetos</li>
          </a>
          <a  onClick={() => setOpen(!open)}>
            <li>Conhecimentos</li>
          </a>
          <a onClick={() => setOpen(!open)}>
            <li>Fale Comigo</li>
          </a>
        </ul>
        {open ? closeIcon : openIcon}
        {open && (
          <>
            <ul className='menu'>
              <a onClick={() => setOpen(!open)}>
                <li>Sobre Mim</li>
              </a>
              <a  onClick={() => setOpen(!open)}>
                <li>Projetos</li>
              </a>
              <a onClick={() => setOpen(!open)}>
                <li>Conhecimentos</li>
              </a>
              <a onClick={() => setOpen(!open)}>
                <li>Fale Comigo</li>
              </a>
            </ul>
          </>
        )}
      </nav>
  )
}

export default Navbar;