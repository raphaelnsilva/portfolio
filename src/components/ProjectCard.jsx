import * as React from 'react'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 0.8rem;

  width: 74%;
  max-width: 330px;
  height: 100%;
  box-shadow: 5px 5px 0 var(--border);
  border: 1px solid var(--border);
  margin: 0 1.5rem;
  h2 {
    font-size: 1rem;
    font-weight: 800;
  }
  p {
    font-size: 0.7rem;
  }
  a:hover {
    text-decoration: underline;
  }
` 

const Header = styled.header `
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    margin: 0.2rem 0;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
  div, a, {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-size: 0.7rem;
  }
`
const ProjectLink = styled.div`
  display: flex; 
  align-items: center;
  background-color: var(--project-link-background);
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 50px;
  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-size: 0.7rem;
  }
`

const Tecnologies = styled.div`
  display: flex;
  gap: 0.7rem 0;
  flex-wrap: wrap;
  p {
    font-weight: 400;
  }
`


const ProjectCard = (props) => {
  const gitIcon = <AiFillGithub size='20px'/>
  
  return (
    <React.Fragment>
      <CardContainer data-aos="zoom-in-down">
        <Header>
          <img src={props.imageSrc} alt="" />
          <div>
            <h2>{props.title}</h2>
            <a href={props.projectLink} target='_blank'>{props.projectLink}</a>
          </div>
        </Header>
        <p>{props.description}</p>
        <ProjectLink>
          {gitIcon}
          <a href={props.projectRepo} target='_blank'>{props.projectRepo}</a>
        </ProjectLink>
        <Tecnologies>
          {props.javascript}
          {props.next}
          {props.typescript}
          {props.node}
          {props.html}
          {props.css}
          {props.graphql}
          {props.mongodb}
          {props.react}
        </Tecnologies>
      </CardContainer>
    </React.Fragment>
  ) 
}

export default ProjectCard;
