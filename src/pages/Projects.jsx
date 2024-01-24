import * as React from 'react'
import ComponentAnimation from '../components/componentAnimation/ComponentAnimation'
import ProjectCard from '../components/ProjectCard'
import styled from 'styled-components'
import Tag from '../components/Tag'

const ProjectsContainer = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--color1);
  color: var(--color3);
`

const ProjectsCards = styled.div`
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

// typescript={<Tag tecnology='TypeScript' brand='./typescript.png' />}
// next={<Tag tecnology='Next.js' brand='./next.png' />}
// mongodb={<Tag tecnology='MongoDB' brand='./mongodb.png' />}
// graphql={<Tag tecnology='GraphQL' brand='./graphql.png' />}
// javascript={<Tag tecnology='JavaScript' brand='./javascript.png' />}
// node={<Tag tecnology='Node.js' brand='./node.png' />}
// react={<Tag tecnology='React.js' brand='./react.png' />}
// html={<Tag tecnology='HTML5' brand='./html.png' />}
// css={<Tag tecnology='CSS3' brand='./css.png' />}

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ComponentAnimation description='Projetos em destaque'/>
      <ProjectsCards>
        <ProjectCard
          title='Mundo Da Cozinha'
          imageSrc='./mundo-da-cozinha.png'
          description='Utiliza o DatoCMS para criar posts, testes automatizados, código padronizado, o site é muito rapido.'
          projectRepo='https://github.com/raphaelnsilva/next-blog'
          projectLink='https://mundodacozinha.com.br'
          graphql={<Tag tecnology='GraphQL' brand='./graphql.png' />}
          mongodb={<Tag tecnology='MongoDB' brand='./mongodb.png' />}
          next={<Tag tecnology='Next.js' brand='./next.png' />}
          typescript={<Tag tecnology='TypeScript' brand='./typescript.png' />}
        />
        <ProjectCard
          title='Senha Segura'
          imageSrc='./senha-segura.png'
          description='Utiliza o DatoCMS para criar posts, testes automatizados, código padronizado, o site é muito rapido.'
          projectRepo='https://github.com/raphaelnsilva/next-blog'
          projectLink='https://mundodacozinha.com.br'
          javascript={<Tag tecnology='JavaScript' brand='./javascript.png' />}
          html={<Tag tecnology='HTML5' brand='./html.png' />}
          css={<Tag tecnology='CSS3' brand='./css.png' />}
        />
        <ProjectCard
          title='Palavra Secreta'
          imageSrc='./palavra-secreta.png'
          description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
          projectRepo='https://github.com/raphaelnsilva/secretword'
          projectLink='https://raphaelnsilva.github.io/secretword'
          react={<Tag tecnology='React.js' brand='./react.png' />}
          javascript={<Tag tecnology='JavaScript' brand='./javascript.png' />}
        />
      </ProjectsCards>
    </ProjectsContainer>
  )
}

export default Projects
      
      

      

