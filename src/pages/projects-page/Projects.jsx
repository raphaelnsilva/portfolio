import styles from './Projects.module.css';
import HeaderAnimation from '../../components/header-component-animation/HeaderAnimation'
import { Cards } from '../../components/cards-component/Cards'

const Projects = () => {
  return (
    <section id='projects'>
      <main className={styles.main}>

        <HeaderAnimation description='Projetos'/>
        
        <div className={styles.content}>

          <Cards
            title='BLOG'
            imageSrc='./blog.png'
            description='Projeto desenvolvido em React com a utilização do Firebase para gerenciar as autenticações.'
            projectRepo='https://github.com/raphaelnsilva/blog'
            projectLink='https://raphaelnsilva.github.io/blog'
          />

          <Cards
            title='Buscador de CEP'
            imageSrc='./cep.png'
            description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
            projectRepo='https://github.com/raphaelnsilva/buscador'
            projectLink='https://raphaelnsilva.github.io/buscador'
          />

          <Cards
            title='Palavra Secreta'
            imageSrc='./secretword.png'
            description='Este foi meu primeiro projeto com React, para forçar a utilização de hooks como useCallback, useEffect, useState.'
            projectRepo='https://github.com/raphaelnsilva/secretword'
            projectLink='https://raphaelnsilva.github.io/secretword'
          />

          <Cards
            title='Buscador de CEP'
            imageSrc='./cep.png'
            description='Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuário.'
            projectRepo='https://github.com/raphaelnsilva/buscador'
            projectLink='https://raphaelnsilva.github.io/buscador'
          />

          <Cards
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
      
      

      

