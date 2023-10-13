import styles from '../styles/ComponentAnimation.module.css'
const componentAnimation = ({ description }) => {
  return (
    <header data-aos="fade-right">
      <div
        className={styles.headerAnimation}>{description}
      </div>
    </header>
  )
}

export default componentAnimation