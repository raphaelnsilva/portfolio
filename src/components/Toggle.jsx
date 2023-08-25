import './Navbar.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi';

const IconLink = ({ url, icon, label }) => (
  <a href={url} target='_blank'>
    <li>{icon}</li>
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='home' smooth={true} duration={500} className='brand'>
        <span>Raphael</span>
      </Link>

      <ul className='menuDesktop'>
        {[
          { to: 'about', label: 'Sobre Mim' },
          { to: 'projects', label: 'Projetos' },
          { to: 'experience', label: 'Conhecimentos' },
          { to: 'contact', label: 'Fale Comigo' },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            onClick={() => setOpen(!open)}
          >
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
      
      <div className="iconsDesktop">
        <IconLink url='https://github.com/raphaelnsilva' icon={<FiGithub size='25px' />} />
        <IconLink url='https://linkedin.com/in/raphaelnsilva' icon={<FiLinkedin size='25px' />} />
      </div>

      {open ? (
        <FiX className='closeIcon' size='25px' onClick={() => setOpen(!open)} />
      ) : (
        <FiMenu className='openIcon' size='25px' onClick={() => setOpen(!open)} />
      )}

      {open && (
        <ul className='menu'>
          {[
            { to: 'about', label: 'Sobre Mim' },
            { to: 'projects', label: 'Projetos' },
            { to: 'experience', label: 'Conhecimentos' },
            { to: 'contact', label: 'Fale Comigo' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              onClick={() => setOpen(!open)}
            >
              <li>{item.label}</li>
            </Link>
          ))}
          <div className="icons">
            <IconLink url='https://github.com/raphaelnsilva' icon={<FiGithub size='25px' />} />
            <IconLink url='https://linkedin.com/in/raphaelnsilva' icon={<FiLinkedin size='25px' />} />
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
