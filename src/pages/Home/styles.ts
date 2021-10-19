import { Link } from "react-scroll";
import styled from "styled-components";

interface GoToTopProps {
  isVisible: boolean;
}

const GoToTop = styled(Link)<GoToTopProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--blue);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};

  svg {
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--blue-dark);

    svg {
      transform: scale(1.25);
    }
  }
`;

export { GoToTop };
