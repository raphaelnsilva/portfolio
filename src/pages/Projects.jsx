import styles from './modules/Projects.module.css';

const ProjectCard = ({
    title, 
    imageSrc, 
    description, 
    projectRepo, 
    projectLink
}) => (
  <div className={styles.cards} data-aos="flip-left">
    <img src={imageSrc} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <div className={styles.cards_links}>
      <a href={projectLink} target='_blank'>
        <h3>Ver Site</h3>
      </a>
      <a href={projectRepo} target='_blank'>
        <h3>Repositório</h3>
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id='projects'>
      <main className={styles.main}>
        <div 
        data-aos="flip-left" className={styles.header}>
          <h1>Projetos</h1>
        </div>
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
          <ProjectCard
            title='Buscador de CEP'
            imageSrc='./cep.png'
            description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
            projectRepo='https://github.com/raphaelnsilva/buscador'
            projectLink='https://raphaelnsilva.github.io/buscador'
          />
          <ProjectCard
            title='Buscador de CEP'
            imageSrc='./cep.png'
            description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
            projectRepo='https://github.com/raphaelnsilva/buscador'
            projectLink='https://raphaelnsilva.github.io/buscador'
          />
        </div>
      </main>
    </section>
  )
}

export default Projects
      
      

      

