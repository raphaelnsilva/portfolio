import styles from './HeaderAnimation.module.css'

const HeaderAnimation = ({ description }) => {
  return (
    <header data-aos="fade-right">
      <div
        className={styles.headerAnimation}>{description}
      </div>
    </header>
  )
}

export default HeaderAnimation