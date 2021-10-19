import styled from "styled-components";
import { motion } from "framer-motion";

interface ProgressBarProps {
  progress: number;
}

const Container = styled(motion.div)`
  border-radius: 8px;
  padding: 12px;
  padding-top: 10px;
  padding-left: 10px;
  flex-basis: 20%;
  flex-grow: 0;
  background-color: var(--gray-700);

  @media (max-width: 1450px) {
    flex-basis: 28%;
  }
  @media (max-width: 1350px) {
    flex-basis: 45%;
  }
  @media (max-width: 720px) {
    flex-basis: 45%;
  }
  @media (max-width: 560px) {
    flex-basis: 100%;
  }
  & button {
    background-color: var(--gray-900);
    color: var(--white);
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 0px;
    cursor: pointer;
    user-select: none;
    appearance: none;
    text-decoration: none;
    display: block;
    text-align: inherit;
    width: 100%;
    padding: 24px;
    border-radius: 8px;
    & img {
      margin-left: auto;
      margin-right: auto;
      transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      display: block;
      max-width: 70%;
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.22));
      border-radius: 6px;
      height: 104px;
      object-fit: contain;
    }
  }
  & h6 {
    margin: 8px 0px 0px;
    font-weight: 800;
    font-size: 0.875rem;
    line-height: 1.57143;
    padding: 8px;
  }
`;

const Duration = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
  & p {
    font-weight: 500;
    font-size: 13px;
    opacity: 0.9;
    width: 90%;
  }
`;

const ProgressBar = styled.div<ProgressBarProps>`
  width: 90%;
  height: 5px;
  background: transparent;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 0.25em;

  &::before {
    content: "";
    display: block;
    width: ${(props) => `${props.progress}%`};
    height: 5px;
    background: #1890ff;
  }
`;

export { Container, Duration, ProgressBar };
