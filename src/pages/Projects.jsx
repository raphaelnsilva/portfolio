import {FaProjectDiagram, FaExternalLinkAlt} from 'react-icons/fa'
import styles from './modules/Projects.module.css';

const ProjectCard = ({title, imageSrc, description, projectRepo, projectLink}) => (
  <div className={styles.cards}>
    <h2>{title}</h2>
    <img src={imageSrc} alt={title} />
    <p>{description}</p>
    <div className={styles.cards_links}>
      <a href={projectRepo} target='_blank'>
        <FaProjectDiagram size='20px'/>
        <h3>Repositório</h3>
      </a>
      <a href={projectLink} target='_blank'>
        <FaExternalLinkAlt size='20px'/>
        <h3>Ver Site</h3>
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id='projects'>
      <main className={styles.main}>
        <h1>Projetos</h1>
        <div className={styles.content}>
          <ProjectCard
            title='BLOG'
            imageSrc='./blog.png'
            description='Projeto desenvolvido em React com a utilização do Firebase para gerenciar as autenticações.'
            projectRepo='https://github.com/raphaelnsilva/blog'
            projectLink='https://raphaelnsilva.github.io/blog'
          />
          <ProjectCard
            title='Buscador de CEP'
            imageSrc='./cep.png'
            description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
            projectRepo='https://github.com/raphaelnsilva/buscador'
            projectLink='https://raphaelnsilva.github.io/buscador'
          />
          <ProjectCard
            title='Palavra Secreta'
            imageSrc='./secretword.png'
            description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
            projectRepo='https://github.com/raphaelnsilva/secretword'
            projectLink='https://raphaelnsilva.github.io/secretword'
          />
        </div>
      </main>
    </section>
  )
}

export default Projects
      
      

      

