import styles from './Cards.module.css';

export const Cards = ({
  title,
  imageSrc,
  description,
  projectRepo,
  projectLink
}) => (
    <div className={styles.cardProjectsPage} data-aos="zoom-in-down">
      <img className={styles.cardProjectsPageImage} src={imageSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.cardProjectsPageLinks}>
        <a href={projectLink} target='_blank'>
          <h3>Ver Site</h3>
        </a>
        <a href={projectRepo} target='_blank'>
          <h3>Repositório</h3>
        </a>
      </div>
    </div> 
  )


export const ExperienceCard = ({
  imageSrc, 
  title, 
  description
}) => (
  <div className={styles.cardExperiencePage} data-aos="zoom-in-down" >
    <img src={imageSrc} alt={title}/>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

