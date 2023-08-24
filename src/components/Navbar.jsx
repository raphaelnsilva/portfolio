import './Navbar.css';
// HOOKS 
import {useState} from 'react';
import { Link } from 'react-scroll';
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
  const gitIcon = <FiGithub
    className='gitIcon'
    size='25px'
  />
  const linkedinIcon = <FiLinkedin
    className='linkedinIcon'
    size='25px'
  />

  return (
  
    <nav className='navbar'>
      <Link href='#home' className='brand'>
        <span>Raphael</span>
      </Link>
      
      <ul className='menuDesktop'>
        <Link to='about' smooth={true} duration={500} onClick={() => setOpen(!open)}>
          <li>Sobre Mim</li>
        </Link>
        <Link to='projects' smooth={true} duration={500} onClick={() => setOpen(!open)}>
          <li>Projetos</li>
        </Link>
        <Link  onClick={() => setOpen(!open)}>
          <li>Conhecimentos</li>
        </Link>
        <Link onClick={() => setOpen(!open)}>
          <li>Fale Comigo</li>
        </Link>
      </ul>
      <div className="iconsDesktop">
        <a href='https://github.com/raphaelnsilva' target='_blank'>
          <li>{gitIcon}</li>
        </a>
        <a href='https://github.com/raphaelnsilva' target='_blank'>
          <li>{linkedinIcon}</li>
        </a>
      </div>
      {open ? closeIcon : openIcon}
      {open && (
        <>
          <ul className='menu'>
            <Link onClick={() => setOpen(!open)}>
              <li>Sobre Mim</li>
            </Link>
            <Link  onClick={() => setOpen(!open)}>
              <li>Projetos</li>
            </Link>
            <Link onClick={() => setOpen(!open)}>
              <li>Conhecimentos</li>
            </Link>
            <Link onClick={() => setOpen(!open)}>
              <li>Fale Comigo</li>
            </Link>
            <div className="icons">
              <a href='https://github.com/raphaelnsilva' target='_blank'>
                {gitIcon}
              </a>
              <a href='https://github.com/raphaelnsilva' target='_blank'>
                {linkedinIcon}
              </a>
            </div>
          </ul>
        </>
      )}
    </nav>
    
    
  )
}

export default Navbar;