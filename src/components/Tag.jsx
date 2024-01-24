import React from 'react'
import styled from 'styled-components'

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  box-shadow: 3px 3px 0 var(--border);
  border: 1px solid var(--border);
  margin: 0 0.3rem;
  padding: 3px 8px;
  p {
    font-weight: 700;
    font-size: 10px;
  }
  img {
    width: 14px;
  }
`

const Tag = (props) => {
  return (
    <TagContainer>
      <p>{props.tecnology}</p>
      <img src={props.brand} alt={props.brand} />
    </TagContainer>
  )
}

export default Tag
