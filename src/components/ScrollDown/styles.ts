import styled from "styled-components";

const Container = styled.div`
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

export { Container };