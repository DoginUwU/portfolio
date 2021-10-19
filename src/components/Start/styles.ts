import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const HomeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20em;
  cursor: default;

  h1 {
    font-size: 4em;
    color: #38e2b3;
    transition: all 0.5s;

    &:hover {
      color: #ffc107;
    }
  }
  p {
    font-size: 2em;
    font-weight: 300;
    opacity: 0.9;
    margin-top: 0.5em;
  }

  button {
    margin-top: 2em;
  }

  @media (max-width: 1400px) {
    padding: 10em;
  }

  @media (max-width: 930px) {
    padding: 5em;
  }
`;

const CanvasContainer = styled(Canvas)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ScrollDownContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.9;

  svg {
    width: 2em;
    height: 2em;
    margin-right: 0.5em;
  }
`;

export { HomeContainer, CanvasContainer, ScrollDownContainer };
