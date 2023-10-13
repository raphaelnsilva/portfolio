import styles from '../styles/Projects.module.css';
import ComponentAnimation from '../components/ComponentAnimation';
import { Cards } from '../components/Cards'

const Projects = () => {
  return (
    <section id='projects'>
      <main className={styles.main}>

        <ComponentAnimation description='Projetos'/>
        
        <div className={styles.content}>

          <Cards
            title='Senha Segura'
            imageSrc='./safe-password.jpg'
            description='Projeto desenvolvido com html css e javascript puro. Um app simple para gerar senhas seguras!'
            projectRepo='https://vercel.com/raphaelnsilva/safe-password/2FDNmx9qr7NXvFBpG1w6LCoK87kf'
            projectLink='https://safe-password-seven.vercel.app/'
          />

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
        
        </div>
      </main>
    </section>
  )
}

export default Projects
      
      

      

