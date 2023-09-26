import styles from './Experience.module.css'
import {ExperienceCard} from '../../components/cards-component/Cards'
import HeaderAnimation from '../../components/header-component-animation/HeaderAnimation'

const Experience = () => {
  return (
    <main id='experience'>
      <section className={styles.main}>
        
        <HeaderAnimation description='Experiências'/>

        <div className={styles.content}>
          <ExperienceCard
            imageSrc='./javascript.png'
            title='JavaScript'
            description='JavaScript é uma linguagem de programação front-end e back-end amplamente usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.'
          />
          <ExperienceCard
            imageSrc='./reactImage2.png'
            title='React'
            description='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web'
          />
          <ExperienceCard
            imageSrc='./nodeImage.png'
            title='Node'
            description='Software de código aberto, multiplataforma, baseado no interpretador V8 do Google. Permite a execução de códigos JavaScript fora do navegador web.'
          />
          <ExperienceCard
            imageSrc='./htmlImage.png'
            title='HTML5'
            description='HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.'
          />
          <ExperienceCard
            imageSrc='./cssImage.png'
            title='CSS3'
            description='CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.'
          />    
        </div>
      </section>
    </main>
  )
}

export default Experience;