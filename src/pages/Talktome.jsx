import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import {AiOutlineCheck} from 'react-icons/ai'
import {PiMicrosoftOutlookLogoLight} from 'react-icons/pi'
import {FaWhatsapp} from 'react-icons/fa'
import './Talktome.css';

const Talktome = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await clipboardCopy('raphaelnunessilva@hotmail.com');
      setCopied(true);

      // Exibe a mensagem de sucesso por 2 segundos e depois a oculta
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Erro ao copiar para a área de transferência:', error);
    }
  };

  return (
    <section id='talktome'>
      <div className={`email ${copied ? 'copied' : ''}`} 
        onClick={handleEmailClick}>
        <h2>Fale Comigo!</h2>
        <p>Clique copiar para a área de transferência </p>
        <button className='btn btn-outline'>
          <p>raphaelnunessilva@hotmail.com</p> 
          <PiMicrosoftOutlookLogoLight size='29px'/>
        </button>
        {copied && <p className="copy-success">Copiado com sucesso! <AiOutlineCheck/></p>}
        
      </div>

      <div className="emailImage">
          <img src="./email.png" alt="airplane" className="animatedImage"/>
      </div>
    </section>
  );
};

export default Talktome;

