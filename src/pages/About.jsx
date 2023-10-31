import styles from '../styles/About.module.css'
import ComponentAnimation from '../components/ComponentAnimation'
import { useState } from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import clipboardCopy from 'clipboard-copy';
import {AiOutlineCheck} from 'react-icons/ai'
import {MdOutlineContentCopy} from 'react-icons/md'

const About = () => {

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

  return (
    <main id='about'>
      <section className={styles.container}>
        <ComponentAnimation description='Sobre Mim'/>
        <article className={styles.containerContent}>
          <p data-aos="flip-left">Muito prazer! Tenho 24 anos, moro em São Paulo, Brasil. Amo programação, tenho isso como meu principal hobbie. Amo ler, gosto de criar novas soluções e expor minhas opinião. Estou cursando ADS a distância, atualmente no 4# semestre.</p>
          <p data-aos="flip-right">Tenho experiencia em desenvolvimento front-end, utilizando React e Next, sólida base em HTML e CSS. Também possuo experiência com Git e GitHub, ferramentas essenciais para o controle de versão e colaboração.</p>
          <p data-aos="flip-left">Já utilizei sistemas de banco de dados como SQLite, MongoDB e Firebase para desenvolver algumas das minhas aplicações. Meu objetivo é evoluir para me tornar um programador Full Stack e estou confiante de que, com minha determinação e dedicação, alcançarei esse objetivo.</p>
        </article>
        {/* <article className={styles.talktomeContent}>
          <div 
            className={`${styles.emailButton} 
            ${copied ? 'copied' : ''}`}
            onClick={handleEmailClick}
          >
            <MdOutlineContentCopy /> 
            <p>raphaelnunessilva@hotmail.com</p>
          </div>
          {copied &&
            <p className={styles.copySuccess}>
              Copiado com sucesso! <AiOutlineCheck/>
            </p>
          }
          <a className={styles.whatsButton} 
            href="https://wa.me/55986623604" 
            target='_blank'>
            <FaWhatsapp/>
            <p>WhatsApp</p>
          </a>
        </article> */}
      </section>
    </main>
  )
}

export default About;