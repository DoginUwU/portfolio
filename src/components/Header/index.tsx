import { HeaderContainer, HeaderItem } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem to="home" spy smooth>
        Inicio
      </HeaderItem>
      <HeaderItem to="about-me" spy smooth>
        Sobre mim
      </HeaderItem>
      <HeaderItem to="skills" spy smooth>
        Habilidades
      </HeaderItem>
      <HeaderItem to="projects" spy smooth>
        Projetos
      </HeaderItem>
      <HeaderItem to="contacts" spy smooth important>
        Contato
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
