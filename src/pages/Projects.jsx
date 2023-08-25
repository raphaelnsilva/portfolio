import {FaProjectDiagram} from 'react-icons/fa'
import './Projects.css';

const Projects = () => {

  const projectIcon = <FaProjectDiagram
    size='40px'
  />

  return (
    <section id="projects">
      <div className="head">
        <h1>Projetos</h1>
        {projectIcon}
      </div>
      <div className="content">
        <div className='cards'>
          <h2>BLOG</h2>
          <img src="./blog.png" alt="" />
          <p>Projeto desenvolvido em React com a utilização do Firebase para gerenciar as autenticações.</p>
          <p>REACT - FIREBASE</p>
        </div>
        <div className='cards'>
          <h2>buscador de CEP</h2>
          <img src="./cep.png" alt="" />
          <p>Este site utiliza uma API para colher as informações dos endereços e mostrar ao usuario.</p>
          <p>REACT - AXIOS</p>
        </div>
        <div className='cards'>
          <h2>Palavra Secreta</h2>
          <img src="./secretword.png" alt="" />
          <p>Este foi meu primeiro projeto com react, para forçar a utilização de hooks  comouseCallback, useEffect, useState </p>
          <p>REACT - CSS</p>
        </div>
      </div>
    </section>
  )
}

export default Projects

      

