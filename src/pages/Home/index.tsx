import { Icon } from "@iconify/react";
import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Start from "../../components/Start";
import Tools from "../../components/Tools";
import useOffsetTop from "../../hooks/useOffSetTop";
import { GoToTop } from "./styles";

const Home = () => {
  const isTop = useOffsetTop(100);

  return (
    <>
      <div id="home" />
      <Start isOnTop={isTop} />
      <AboutMe />
      <Skills />
      <Tools />
      <Projects />
      <Contacts />
      <GoToTop isVisible={isTop} to="home" spy smooth>
        <Icon icon="akar-icons:chevron-up" />
      </GoToTop>
    </>
  );
};

export default Home;
