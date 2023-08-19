import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h3>Raphael</h3>
        <p>&copy;2023 por Raphael Nunes Silva.</p>
        <p>Todos os direitos reservados.</p>
        <p>v0.1</p>
      </footer>
    </>
  )
}

export default Footer