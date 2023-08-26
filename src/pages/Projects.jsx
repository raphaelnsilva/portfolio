import {FaProjectDiagram, FaExternalLinkAlt} from 'react-icons/fa'
import './Projects.css';

const ProjectCard = ({title, imageSrc, description}) => (
  <div className='cards'>
    <h2>{title}</h2>
    <img src={imageSrc} alt={title} />
    <p>{description}</p>
    <div className="cardLinks">
      <a href="#">
        <FaProjectDiagram size='20px'/>
        <h3>Repositório</h3>
      </a>
      <a href="#">
        <FaExternalLinkAlt size='20px'/>
        <h3>Ver Site</h3>
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id='projects'>
      <h1>Projetos</h1>
      <div className='content'>
        <ProjectCard
          title='BLOG'
          imageSrc='./blog.png'
          description='Projeto desenvolvido em React com a utilização do Firebase para gerenciar as autenticações.'
        />
        <ProjectCard
          title='Buscador de CEP'
          imageSrc='./cep.png'
          description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
        />
        <ProjectCard
          title='Palavra Secreta'
          imageSrc='./secretword.png'
          description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
        />
        <ProjectCard
          title='Palavra Secreta'
          imageSrc='./secretword.png'
          description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
        />
        <ProjectCard
          title='Palavra Secreta'
          imageSrc='./secretword.png'
          description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
        />
      </div>
    </section>
  )
}

export default Projects
      
      

      

