import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10em 10em;

  button {
    margin-top: 2em;
  }

  @media (max-width: 768px) {
    padding: 5em 3em;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2em;
  grid-template-areas:
    "main main . ."
    "main main . .";

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`;

const ProjectItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1em;
  cursor: default;

  &:first-of-type {
    grid-area: main;

    h3 {
      font-size: 2em;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: end;

    h3 {
      font-size: 1em;
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    div {
      display: none;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 10vw;
  left: -50vh;
  width: 90vh;
  height: 90vh;
  border-radius: 50%;
  z-index: -2;
  background: linear-gradient(
    180deg,
    rgba(17, 109, 247, 0.5) 0%,
    rgba(6, 69, 167, 0.5) 100%
  );

  @media (max-width: 1270px) {
    display: none;
  }
`;

export { Container, Circle, ProjectsContainer, ProjectItem };
