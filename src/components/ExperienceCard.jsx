import * as React from 'react'
import styled from 'styled-components'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CardExperienceContainer = styled.section`
  width: 86%;
  max-width: 330px;
  height: 100%;
  font-size: 0.9rem;
  box-shadow: 5px 5px 0 var(--border);
  border: 1px solid var(--border);
  margin: 0 1.5rem;
  p {
    font-size: 0.8rem;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }
`

const ExperienceTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-size: 2rem;
  }
  img {
    margin: 0;
    width: 45px;
  }
`

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
`

const ProjectLink = styled.div`
  display: flex; 
  align-items: center;
  background-color: var(--project-link-background);
  gap: 0.5rem;
  padding: 0.2rem;
  border-radius: 50px;

  img {
    width: 18px;
  }
  a {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
    font-size: 0.7rem;
    font-weight: 600;
  }
`

const ExperienceCard = (props) => {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <React.Fragment>
      <CardExperienceContainer data-aos="zoom-in-down">
        <ExperienceContent>
          <ExperienceTitle>
            <h1>{props.title}</h1>
            <img src={props.imageSrc} alt={props.title}/>
          </ExperienceTitle>
          <p>{props.description}</p>
          {showMore &&
            <React.Fragment>
              <h5>Meus projetos com {props.title}:</h5>
              <ProjectLink>
                <img src={props.projectsBrand} alt={props.projectsBrand} />
                <a href={props.projectsLink} target='_blank'>{props.projectsLink}</a>
              </ProjectLink>
            </React.Fragment>
          }
          <span onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Ver menos' : 'Ver mais'}
            {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </ExperienceContent>
      </CardExperienceContainer>
    </React.Fragment>
  ) 
}

export default ExperienceCard;