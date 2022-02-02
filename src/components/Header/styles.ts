import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

interface HeaderItemProps {
  important?: boolean;
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 2em;
  left: 10%;
  padding: 1em;
  background-color: var(--gray-700);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20em;
  opacity: 0.95;
  z-index: 100;

  @media (max-width: 930px) {
    left: 1em;
    right: 1em;
  }

  @media (max-width: 430px) {
    padding: 0.5em;
  }
`;
const HeaderItem = styled(ScrollLink)<HeaderItemProps>`
  padding: 0.75em;
  text-align: center;
  cursor: pointer;

  background-color: ${(props) =>
    props.important ? "var(--blue)" : "transparent"};
  border-radius: 20em;
  color: ${(props) =>
    props.important ? "var(--white)" : "var(--text-secondary)"};

  &:hover {
    color: var(--white);
  }

  @media (max-width: 430px) {
    padding: 0.5em;

    &.skills {
      display: none;
    }
  }
`;

export { HeaderContainer, HeaderItem };
