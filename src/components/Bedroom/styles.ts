import styled from "styled-components";

interface BedroomContainerProps {
  visible: boolean;
}

const BedroomContainer = styled.div<BedroomContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.2s;
  background: var(--gray-900);
  z-index: 9999;
`;

export { BedroomContainer };
