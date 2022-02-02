import { useHistory, useLocation } from "react-router-dom";
import { HeaderContainer, HeaderItem } from "./styles";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const handleClick = (name: string) => { 
    if (pathname !== "/") {
      history.push(name);
    }
  }

  return (
    <HeaderContainer>
      <HeaderItem to="home" spy smooth onClick={() => handleClick("/")}>
        Inicio
      </HeaderItem>
      <HeaderItem to="about-me" spy smooth onClick={() => handleClick("/")}>
        Sobre
      </HeaderItem>
      <HeaderItem to="skills" spy smooth onClick={() => handleClick("/")} className="skills">
        Habilidades
      </HeaderItem>
      <HeaderItem to="" onClick={() => history.push("/projects")}>
        Projetos
      </HeaderItem>
      <HeaderItem to="" onClick={() => history.push("/blog")}>
        Blog
      </HeaderItem>
      <HeaderItem
        to="contacts"
        spy
        smooth
        important
        onClick={() => handleClick("/")}
      >
        Contato
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
