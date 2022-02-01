import { Icon } from "@iconify/react";
import { lazy } from "react";

import useOffsetTop from "../../hooks/useOffSetTop";
import { GoToTop } from "./styles";

const AboutMe = lazy(() => import("../../components/AboutMe"));
const Contacts = lazy(() => import("../../components/Contacts"));
const Projects = lazy(() => import("../../components/Projects"));
const Skills = lazy(() => import("../../components/Skills"));
const Start = lazy(() => import("../../components/Start"));
const Tools = lazy(() => import("../../components/Tools"));

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
