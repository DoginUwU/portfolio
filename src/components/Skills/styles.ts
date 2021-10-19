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

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  gap: 50px;
  margin-top: 3em;
  @media (max-width: 1350px) {
    gap: 30px;
    text-align: center;
    justify-content: center;
  }
`;

export { Container, ItemsContainer };
