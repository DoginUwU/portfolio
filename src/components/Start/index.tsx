import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-scroll";
import Bedroom from "../../components/Bedroom";
import Button from "../../components/Button";
import HomeCanvas from "../../components/HomeCanvas";
import { useEarth } from "../../stores";
import {
  CanvasContainer,
  HomeContainer,
  PopupContainer,
  ScrollDownContainer,
} from "./styles";

interface StartProps {
  isOnTop: boolean;
}

const Start = ({ isOnTop }: StartProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { setCoords, focus } = useEarth();

  const onMouseDown = (event: any) => {
    event.preventDefault();
    const coords = { x: 0, y: 0 };
    coords.x = (event.clientX / window.innerWidth) * 2 - 1;
    coords.y = -(event.clientY / window.innerHeight) * 2 + 1;

    setCoords(coords);
    setMousePos({
      x: event.clientY,
      y: event.clientX,
    });
  };

  return (
    <>
      <Bedroom />
      <CanvasContainer>
        <HomeCanvas />
      </CanvasContainer>
      <PopupContainer isOpen={!isOnTop && focus} x={mousePos.x} y={mousePos.y}>
        <h1>Earth</h1>
      </PopupContainer>
      <HomeContainer onMouseDown={onMouseDown}>
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
