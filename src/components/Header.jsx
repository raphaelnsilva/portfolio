import * as React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
// icons 
import { AiOutlineMenu, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import Switch from './Switch'

const HeaderContainer = styled.header`
  position: fixed;
  width: -webkit-fill-available;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 16px;
  background-color: var(--color2);
  z-index: 1000;
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    cursor: pointer;
    text-align: center;
    color: var(--color3);
    transition: .4s;
  }

  a {
    text-decoration: none;
  }

  span {
    font-size: 1.1rem;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--color3);
  }

  @media (min-width: 1024px) {
    span {
      font-size: 1.4rem;
    }
    .toggleIcon {
      display: none;
    }

    li {
      font-weight: 500;
      line-height: 1.5;
      color: var(--color3);
      box-shadow: inset 0 0 0 0 var(--color3);
      transition: color .3s ease-in-out, 
      box-shadow .3s ease-in-out;
    }

    li:hover {
      color: var(--color1);
      box-shadow: inset 200px 0 0 0 var(--color3);
    }
  }
`
const MobileMenu = styled.ul`
  background-color: var(--color2);
  position: absolute;
  height: 270%;
  width: 100%;
  z-index: 1000;
  top: 80px;
  right: 0;
  border-radius: 0 0 15px 15px;
  li {
    padding: 1rem 0;
    margin: 0 1rem;
    border-bottom: 1px solid rgba(0,0,0, 0.089);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`
const MobileIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-top: 14px;
  a {
    cursor: pointer;
    color: var(--color3);
  }
`
const DesktopMenu = styled.ul`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    margin-right: 1em;
    li {
      padding: .4em .6em;
      margin: 0 10px 0 10px;
    }
  }
`
const DesktopIcons = styled.div`
  display: none; 
  @media (min-width: 1024px) {
    display: flex;
    gap: 20px;
    a {
      cursor: pointer;
      color: var(--color3);
    }
    a:hover {
      transform: scale(1.2);
      transition: .2s;
    }
  }
`

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const linkedinLink = 'https://www.linkedin.com/in/raphaelsilvaa'
  const githubLink = 'https://github.com/raphaelnsilva'

  return (
    <HeaderContainer>
      <Link
        data-aos="fade-down" 
        to='home'
        smooth={true} 
        duration={500} 
      >
        <span>raphael</span>
      </Link>
      <Switch />
      {open 
        ? <IoMdClose className='toggleIcon' size='25px' onClick={() => setOpen(!open)}/> 
        : <AiOutlineMenu className='toggleIcon' size='25px' onClick={() => setOpen(!open)}/>
      }
      {open && (
        <React.Fragment>
          <MobileMenu>
            <Link 
              onClick={() => setOpen(!open)}  
              to='projects'   
              smooth={true} 
              duration={500}
            ><li>Projetos</li>
            </Link>
            <Link 
              onClick={() => setOpen(!open)}  
              to='about'   
              smooth={true} 
              duration={500}
            ><li>Sobre Mim</li>
            </Link>
            <Link 
              onClick={() => setOpen(!open)}
              to='experience' 
              smooth={true} 
              duration={500}
            ><li>Tecnologias</li> 
            </Link>
            <MobileIcons>
              <a href={githubLink} target='_blank'>
                <AiFillGithub size='30px' />
              </a>
              <a href={linkedinLink} target='_blank'>
                <AiFillLinkedin size='30px' />
              </a>
            </MobileIcons>
          </MobileMenu>
        </React.Fragment>
      )}
      <DesktopMenu>
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
          <li>Tecnologias</li>
        </Link>
      </DesktopMenu>
      <DesktopIcons>
        <a href={githubLink} target='_blank' data-aos="fade-down">
          <AiFillGithub size='30px' />
        </a>
        <a href={linkedinLink} target='_blank' data-aos="fade-down">
          <AiFillLinkedin size='30px' />
        </a>
      </DesktopIcons>
    </HeaderContainer>
  )
}

export default Header