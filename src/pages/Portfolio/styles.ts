import styled from "styled-components";

const Container = styled.div``;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 45vh;
  background-color: var(--blue);

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 9em 2em 2em 2em;
`;

const Computer = styled.div`
  position: relative;
  width: 18em;
  height: 12em;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.3em;
  overflow: hidden;
  cursor: default;

  @media (max-width: 768px) {
    display: none;
  }

  & .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1em;
    background-color: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.2em;
    padding-left: 0.3em;

    & .circle {
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      background-color: var(--blue);

      &:hover {
        opacity: 0.8;
      }
    }

    & .red {
      background-color: #ff4f4f;
    }
    & .yellow {
      background-color: #ffdf4f;
    }
    & .green {
      background-color: #4fff58;
    }
  }

  & .screen {
    position: absolute;
    top: 1em;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0.8em;
    overflow: scroll;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 0.5em;
    padding-bottom: 1.2em;
  }
  & .screen-content {
    width: 100%;
    height: 2em;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.3em;

    &:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

const Projects = styled.div`
  position: relative;
  padding: 3em 1em;
  width: fit-content;
  margin: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: start;
  gap: 2em;

  @media (max-width: 468px) {
    padding: 1em;
    gap: 1em;
  }
`;

const Project = styled.div`
  position: relative;
  cursor: default;

  width: 25em;
  height: 15em;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
    border-radius: 0.5em;
  }

  & .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #b2ffed;
    z-index: -1;
    border-radius: 0.5em;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  &:hover {
    & .card {
      top: 0.8em;
      left: 0.8em;
      opacity: 1;
    }
  }
`;

export { Container, Banner, Computer, Projects, Project };