import React, { useEffect, useState } from 'react';
import styles from '../styles/Switch.module.css';

const Switch = () => {

  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <label className={styles.switch}>
        <input onChange={switchTheme} type="checkbox" checked={theme === 'dark'} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  )
}

export default Switch;
