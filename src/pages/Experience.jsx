import * as React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import ComponentAnimation from '../components/componentAnimation/ComponentAnimation'
import styled from 'styled-components'

const ExperienceContainer = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--color1);
  color: var(--color3);
`
const ExperiencesCards = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 80px 0 100px 0;
  margin: auto;
  @media (min-width: 760px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
`

const Experience = () => {
  return (
    <React.Fragment>
      <ExperienceContainer id='experience'>
        <ComponentAnimation description='Tecnologias'/>
        <ExperiencesCards>
          <ExperienceCard
            imageSrc='./typescript.png'
            title='TypeScript'
            description='TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
            projectsLink='https://safe-password-seven.vercel.app/'
            projectsBrand='./senha-segura.png'
          />
          <ExperienceCard
            imageSrc='./graphql.png'
            title='GraphQL'
            description='GraphQL é uma linguagem de consulta criada pelo Facebook em 2012 e lançada publicamente em 2015. É considerada uma alternativa para arquiteturas REST, além de oferecer um serviço runtime para rodar comandos e consumir uma API.'
            projectsLink='https://safe-password-seven.vercel.app/'
            projectsBrand='./senha-segura.png'
          />
          <ExperienceCard
            imageSrc='./next.png'
            title='Next.js'
            description='Next.js é uma estrutura da web de desenvolvimento front-end React de código aberto criada por Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos da web baseados em React.'
            projectsLink='https://safe-password-seven.vercel.app/'
            projectsBrand='./senha-segura.png'
          />
          <ExperienceCard
            imageSrc='./mongodb.png'
            title='MongoDB'
            description='software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.'
            projectsLink='https://safe-password-seven.vercel.app/'
            projectsBrand='./senha-segura.png'
          />
          <ExperienceCard
            imageSrc='./javascript.png'
            title='JavaScript'
            description='JavaScript é uma linguagem de programação front-end e back-end amplamente usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.'
            projectsLink='https://safe-password-seven.vercel.app/'
            projectsBrand='./senha-segura.png'
          />
          <ExperienceCard
            imageSrc='./react.png'
            title='React.js'
            description='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web'
          />
          <ExperienceCard
            imageSrc='./node.png'
            title='Node'
            description='Software de código aberto, multiplataforma, baseado no interpretador V8 do Google. Permite a execução de códigos JavaScript fora do navegador web.'
          />
          <ExperienceCard
            imageSrc='./html.png'
            title='HTML5'
            description='HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.'
          />
          <ExperienceCard
            imageSrc='./css.png'
            title='CSS3'
            description='CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.'
          />    
        </ExperiencesCards>
      </ExperienceContainer>
    </React.Fragment>
  )
}

export default Experience;