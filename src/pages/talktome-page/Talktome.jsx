import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import {AiOutlineCheck} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import styles from './Talktome.module.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter';

import HeaderAnimation from '../../components/header-component-animation/HeaderAnimation'

const Talktome = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await clipboardCopy('raphaelnunessilva@hotmail.com');
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao copiar para a área de transferência:', error);
    }
  };

  const [text] = useTypewriter({
    words: ['copiar o email', 'me enviar um email'],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 10
  })

  return (

    <main id='talktome'>
      
      <HeaderAnimation description='Fale Comigo!'/>

      <section className={styles.talktomeContent}>
        <div className={styles.typewriter}>
          <p>Clique para copiar</p>
        </div>
        <div className={`${styles.emailButton} 
          ${copied ? 'copied' : ''}`}
          onClick={handleEmailClick}
          >raphaelnunessilva@hotmail.com
        </div>
        {copied &&
          <p className={styles.copySuccess}>
            Copiado com sucesso! <AiOutlineCheck/>
          </p>
        }
        <p>Ou me envie uma mensagem</p>
        <a className={styles.whatsButton} 
          href="https://wa.me/55986623604" 
          target='_blank'>
          <FaWhatsapp/>
          <p>WhatsApp</p>
        </a>
      </section>
    </main>
  );
};

export default Talktome;

