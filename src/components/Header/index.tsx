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
        Home
      </HeaderItem>
      <HeaderItem to="about-me" spy smooth onClick={() => handleClick("/")}>
        About
      </HeaderItem>
      <HeaderItem to="skills" spy smooth onClick={() => handleClick("/")} className="skills">
        Skills
      </HeaderItem>
      <HeaderItem to="" onClick={() => history.push("/projects")}>
        Projects
      </HeaderItem>
      {/* <HeaderItem to="" onClick={() => history.push("/blog")}>
        Blog
      </HeaderItem> */}
      <HeaderItem
        to="contacts"
        spy
        smooth
        important
        onClick={() => handleClick("/")}
      >
        Contact
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
