import styles from './About.module.css'
import HeaderAnimation from '../../components/header-component-animation/HeaderAnimation'

const About = () => {
  return (
    <main id='about'>
      <section className={styles.container}>
        <HeaderAnimation description='Sobre Mim'/>
        <div className={styles.containerContent}>
          <p data-aos="flip-left">Muito prazer! Tenho 24 anos, moro em São Paulo, Brasil. Amo programação, tenho isso como meu principal hobbie. Amo ler, gosto de criar novas soluções e expor minhas opinião. Estou cursando ADS a distância, atualmente no 4# semestre.</p>
          <p data-aos="flip-right">Tenho experiencia em desenvolvimento front-end, utilizando React e Next, sólida base em HTML e CSS. Também possuo experiência com Git e GitHub, ferramentas essenciais para o controle de versão e colaboração.</p>
          <p data-aos="flip-left">Já utilizei sistemas de banco de dados como SQLite, MongoDB e Firebase para desenvolver algumas das minhas aplicações. Meu objetivo é evoluir para me tornar um programador Full Stack e estou confiante de que, com minha determinação e dedicação, alcançarei esse objetivo.</p>
        </div>
      </section>
    </main>
  )
}

export default About;