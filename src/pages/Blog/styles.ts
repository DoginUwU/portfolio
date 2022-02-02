import styled, { keyframes } from "styled-components";

const title = keyframes`
  0% {
    -webkit-text-stroke-color: #f110de;
    text-shadow: -6px 6px #f1ed10, -15px 10px cyan;
  }

  33% {
    -webkit-text-stroke-color: cyan;
    text-shadow: -6px 6px #f110de, -15px 10px #f1ed10;
  }

  66% {
    -webkit-text-stroke-color: #f1ed10;
    text-shadow: -6px 6px cyan, -15px 10px #f110de;
  }

  100% {
    -webkit-text-stroke-color: #f110de;
    text-shadow: -6px 6px #f1ed10, -15px 10px cyan;
  }
`;

const Start = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  
  div:first-of-type {
    position: absolute;
    top: 0;
    width: 120%;
    margin-left: -10em;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div:nth-child(2) {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 30em;
      margin-left: 40em;
    }
  }

  div:nth-child(3) {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      margin-right: 12em;
      font-size: 3em;
      font-weight: bold;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 15px;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: #f110de;
      text-shadow: -6px 6px #f1ed10, -15px 10px cyan;

      animation: ${title} 4s ease infinite;
    }
  }

  @media (max-width: 1090px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 2em 10em;

  @media (max-width: 862px) {
    padding: 5em 1em 1em 1em;
  }
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    z-index: -1;
`;

const Banner = styled.div`
  width: 100%;
  background-color: var(--blue);
  border-radius: 0.5em;
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  padding: 2em;

  & div h1 {
    margin-bottom: 0.5em;
  }

  & svg {
    width: 5em;
    height: 5em;
  }
`;

const Documents = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 2em;
  gap: 1em;
  color: #000;

  @media (max-width: 768px) {
    padding: 2em 0.5em;
  }
`;

const Document = styled.div`
  position: relative;
  width: 20em;
  height: 20em;
  overflow: hidden;
  border-radius: 0.5em;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.9);
  cursor: pointer;

  & img {
    width: 100%;
    height: 70%;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  & div {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      font-size: 1em;
    }

    & p {
      font-size: 0.8em;
    }
  }

  &:hover {
    & img {
      height: 100%;
      transform: scale(1.1);
    }
  }
`;

export { Start, Container, Banner, Documents, Document, Background };