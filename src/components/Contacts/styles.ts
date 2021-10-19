import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10em 10em;

  @media (max-width: 768px) {
    padding: 5em 3em;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  margin-top: 3em;
  border-radius: 1em;
  padding: 2em;
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  #computer_image {
    flex: 2;
  }

  @media (max-width: 1000px) {
    #computer_image {
      display: none;
      flex: 0;
    }
  }
`;

const InputsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 3;
  position: relative;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
  }

  input,
  textarea {
    width: 100%;
    height: 3em;
    border-radius: 1em;
    border: none;
    padding: 1em;
    font-size: 1.2em;
    font-weight: bold;
    background-color: rgba(0, 102, 255, 0.1);

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100%;
    height: 3em;
    margin-top: 1em;
  }

  .or {
    font-weight: bold;
    text-align: center;
    font-size: 1.2em;
    margin-top: 2em;
    margin-bottom: 2em;
    color: #000;
  }
`;

const BadgesContainer = styled.div`
  position: absolute;
  bottom: -4em;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;

  a,
  div {
    width: 4em;
    height: 4em;
    padding: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    cursor: pointer;
    background-color: var(--blue);
    color: #fff;

    svg {
      width: 2em;
      height: 2em;
    }

    &:hover {
      transform: translateY(-0.5em);
    }
  }

  @media (max-width: 768px) {
    gap: 0.5em;
  }
`;

export { Container, ContactContainer, InputsContainer, BadgesContainer };
