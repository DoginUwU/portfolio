import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10em 10em;

  p {
    font-size: 1.25em;
    opacity: 0.8;
    max-width: 40em;
    margin-top: 1.5em;
    text-indent: 2em;
  }

  button {
    margin-top: 2.5em;
  }

  @media (max-width: 768px) {
    padding: 5em 3em;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 0;
  right: -50vh;
  width: 90vh;
  height: 90vh;
  border-radius: 50%;
  background: linear-gradient(
    156.43deg,
    rgba(231, 16, 67, 0.5) 8.39%,
    rgba(134, 2, 34, 0.5) 89.57%
  );

  @media (max-width: 1270px) {
    display: none;
  }
`;

export { Container, Circle };
