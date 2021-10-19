import styled from "styled-components";

const Container = styled.h1`
  font-size: 3em;
  position: relative;
  padding: 0.5em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 70%;
    height: 100%;
    background: linear-gradient(
      101.57deg,
      #0066ff 1.33%,
      #0066ff 1.34%,
      #003a92 92.62%
    );
    border-radius: 1em;
    z-index: -1;
  }
`;

export { Container };
