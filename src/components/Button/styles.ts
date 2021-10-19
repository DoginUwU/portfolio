import styled from "styled-components";

const Container = styled.button`
  padding: 0.75em 1.5em;
  outline: none;
  border: none;
  border-radius: 0.5em;
  background-color: var(--blue);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  svg {
    margin-left: 0.5em;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    opacity: 0.9;

    svg {
      transform: translateX(0.5em);
    }
  }
`;

export { Container };
