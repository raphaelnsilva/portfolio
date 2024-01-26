import styled from 'styled-components';

const HeaderAnimation = styled.div`
  color: var(--color3);
  font-size: 1.7rem;
  font-weight: 300;
  padding: 120px 0 30px 0;
  margin: 0 2rem;
  background:
    linear-gradient(
      to right,
      var(--border),
      var(--border)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgb(255, 255, 0),
      rgb(242, 0, 255),
      rgb(0, 38, 255),
      rgb(106, 255, 0)
  );
  background-size: 100% 1px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;

  &:hover {
    background-size: 0 3px, 100% 1px;
  }

  @media (min-width: 820px) {
    font-size: 2.6rem;
    margin: 0 4rem;
  }
`;

const AnimatedHeader = (props) => {
  return (
    <header data-aos="fade-right">
      <HeaderAnimation>{props.description}</HeaderAnimation>
    </header>
  );
}

export default AnimatedHeader;
