import { useState } from "react";
import { Link } from "react-scroll";
import Button from "../../components/Button";
import HomeCanvas from "../../components/HomeCanvas";
import { useEarth } from "../../stores";
import ScrollDown from "../ScrollDown";
import {
  CanvasContainer,
  HomeContainer,
  PopupContainer
} from "./styles";

interface StartProps {
  isOnTop: boolean;
}

const Start = ({ isOnTop }: StartProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { setCoords, focus, name } = useEarth();

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
      <CanvasContainer>
        <HomeCanvas />
      </CanvasContainer>
      <PopupContainer isOpen={!isOnTop && focus} x={mousePos.x} y={mousePos.y}>
        <h1>{name}</h1>
      </PopupContainer>
      <HomeContainer onMouseDown={onMouseDown}>
        <h1>Luiz Eduardo</h1>
        <p>Front-end Developer</p>
        <Link to="contacts" spy smooth>
          <Button>Contact-me</Button>
        </Link>
      </HomeContainer>
      <ScrollDown />
    </>
  );
};

export default Start;
