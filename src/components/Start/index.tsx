import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import Bedroom from "../../components/Bedroom";
import Button from "../../components/Button";
import HomeCanvas from "../../components/HomeCanvas";
import { CanvasContainer, HomeContainer, ScrollDownContainer } from "./styles";

const Start = () => {
  return (
    <>
      <Bedroom />
      <CanvasContainer>
        <HomeCanvas />
      </CanvasContainer>
      <HomeContainer>
        <h1>Luiz Eduardo</h1>
        <p>Front-end Developer</p>
        <Link to="contacts" spy smooth>
          <Button>Fale comigo</Button>
        </Link>
      </HomeContainer>
      <ScrollDownContainer>
        <Icon icon="clarity:mouse-line" />
        Rolar para baixo
      </ScrollDownContainer>
    </>
  );
};

export default Start;
