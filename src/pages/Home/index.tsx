import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Start from "../../components/Start";
import Tools from "../../components/Tools";
import { useBedroom } from "../../stores";

const Home = () => {
  const { loading } = useBedroom();

  return (
    <>
      <Start />
      {!loading && (
        <>
          <AboutMe />
          <Skills />
          <Tools />
          <Projects />
          <Contacts />
        </>
      )}
    </>
  );
};

export default Home;
