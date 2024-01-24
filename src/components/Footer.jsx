import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import packageJson from '../../package.json';
import styled from 'styled-components'

const generateIcon = (IconComponent) => (
  <IconComponent size='30px' />
);

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  max-width: 500px;
  margin: auto;
  background-color: var(--color2);
  color: var(--color3);
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <p>2023 por Raphael Silva.</p>
        <p>Direitos reservados. &copy;</p>
        <p>version: {packageJson.version}</p>
      </Content>
      <Links>
        <a 
          href='https://github.com/raphaelnsilva'
          target='_blank'>
          {generateIcon(AiFillGithub)}
        </a>
        <a 
          href='https://www.linkedin.com/in/raphaelsilvaa/'
          target='_blank'>
          {generateIcon(AiFillLinkedin)}
        </a>
      </Links>
    </FooterContainer>
  )
}

export default Footer;