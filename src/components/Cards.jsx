import styles from '../styles/Cards.module.css';

export const Cards = ({
  title,
  imageSrc,
  description,
  projectRepo,
  projectLink
  
}) => (
    <div className={styles.cardProjectsPage}data-aos="zoom-in-down" >
      <img className={styles.cardProjectsPageImage} src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.cardProjectsPageLinks}>
        <a href={projectLink} target='_blank'>Visitar</a>
        <a href={projectRepo} target='_blank'>Repositório</a>
      </div>
    </div> 
  )


export const ExperienceCard = ({
  imageSrc, 
  title, 
  description

}) => (
  <div className={styles.cardExperiencePage}  >
    <img className={styles.cardExperienceImage} src={imageSrc} alt={title}/>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

