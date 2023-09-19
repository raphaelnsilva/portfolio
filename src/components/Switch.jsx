import styles from './modules/Switch.module.css'
import useLocalStorage from 'use-local-storage';

const Switch = () => {

  const defaultDark = window.matchMedia('(prefers-color-schema: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div>
      <label className={styles.switch}>
        <input onClick={switchTheme} type="checkbox"/>
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  )
}

export default Switch;
