import AnimatedHeader from '../components/AnimatedHeader'
import styled from 'styled-components'

const AboutContainer = styled.section`
  color: var(--color3);
  background-color: var(--color2);
  p {
    max-width: 80%;
    margin: 0 auto;
    font-size: 1rem;
  }
`

const AboutContent = styled.article`
  text-indent: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 70%;
  margin: 30px 0;

  @media (min-width: 820px) {
    display: flex; 
    flex-direction: row;
    gap: 3rem;
    margin: 4rem 2rem;
  
    p {
      max-width: 600px;
    }
  
  }
`

const About = () => {
  return (
    <AboutContainer id='about'>
      <AnimatedHeader description='Sobre Mim'/>
      <AboutContent>
        <div>
          <p data-aos="flip-left">
            Olá, Muito prazer eu sou o Raphael! Tenho 24 anos, moro em São Paulo, 
            Brasil. Sou apaixonado por programação. Nos meus tempos livres gosto de ler,
            também jogar basquete ou tocar violão. Minha principal habilidade é de criar 
            novas estrategias que otimizem meu tempo dentro do meu espaço de trabalho. 
            Estou cursando Análise e desenvolvimento de sistemas pela Universidade Nove 
            de Julho, atualmente no 4° semestre.
          </p>
          <br />
          <p data-aos="flip-right">
            Tenho experiencia em desenvolvimento front-end e back-end, utilizando Javascript.
            Como banco de dados gosto de utilizar MongoDB ter mais escalabilidade
            Tenho bases sólidas em HTML e CSS. Também possuo experiência com Git e GitHub, 
            essenciais para o controle de versão e colaboração.
          </p>
        </div>
      </AboutContent>
    </AboutContainer>
  )
}

export default About;