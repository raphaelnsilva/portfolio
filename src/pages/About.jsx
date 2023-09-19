import styles from './modules/About.module.css'

const About = () => {
  return (
    <section id='about'>
      <main className={styles.main}>
        <h1>Sobre mim</h1>
        <p>Tenho 24 anos, e moro na zona norte da capital. Sou um ex-técnico de ar-condicionado hoje estou em transição de carreira. Amo livros também adoro praticar esportes e minha principal característica, é que sou uma pessoa que sempre busca a excelência. Ou seja, eu não entro se não for para dar o meu melhor sempre.</p>
        <p>As principais tecnologias que Utilizo, no front-end, uso <strong>React</strong> com JavaScript e tenho uma base solida em <strong>HTML E CSS.</strong> No back-end utilizo <strong>Node</strong> com npm pra criação de requisições HTTP dentre outras centenas de aplicações. Também <strong>git e gituhub.</strong> .</p>
        <p>Também ja trabalhei em cima de algumas tecnologias relacionada a banco de dados como SQLite, Mongodb, Firebase. Pretendo me tornar um programador Full Stack e acredito que com minha dedicação irei conseguir.</p>
      </main>
    </section>
  )
}

export default About;