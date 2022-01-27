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
  gap: 0.5em;
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 20px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export { Container };
