import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 10em 3em;
    gap: 2em;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30em;
  gap: 5em;

  & img {
    flex: 1;
    height: 100%;
    object-fit: cover;
    border-radius: 0.3em;
  }

  & div {
    position: relative;
    max-width: 30em;
    height: 100%;
    padding-bottom: 4em;

    & button {
      position: absolute;
      bottom: 2em;
      left: 2em;
    }
  }

  @media (max-width: 1400px) {
    height: 25em;
  }

  @media (max-width: 1230px) {
    height: 20em;
  }

  @media (max-width: 980px) {
    height: auto;
    flex-direction: column;

    img {
      width: 100%;
      height: 100%;
    }

    div {
      width: 100%;
      max-width: 100%;
    }
  }
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 2em;
  padding: 2em;
  border-radius: 0.3em;
  border: 1px solid #5b5b5b;

  img {
    border-radius: 0.3em;
  }

  .carousel_image {
      height: 40em;
      object-fit: contain;
  }
`;

export { Container, HeaderContainer, Card };