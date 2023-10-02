import React, { useEffect, useState } from 'react';
import styles from './Switch.module.css';

const Switch = () => {
  const [theme, setTheme] = useState(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return defaultDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <label className={styles.switch}>
        <input onClick={switchTheme} type="checkbox" checked={theme === 'dark'} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default Switch;
