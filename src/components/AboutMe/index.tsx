import { Icon } from "@iconify/react";
import toast from "react-hot-toast";
import Button from "../Button";
import Title from "../Title";
import { Circle, Container } from "./styles";

const AboutMe = () => {
  const handleCV = () => {
    toast.error("Em progresso...", {
      icon: "⛔",
    });
  };

  return (
    <Container id="about-me">
      <Title>About Me</Title>
      <p>
        I'm Luiz Eduardo, a passionate self-taught Front-end web developer and a freelance from Brazil. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
      </p>
      <p>
        I try to always dedicate myself to the maximum in creating quality products with high fidelity according to the defined proposal. I'm always willing to learn new technologies as well as help anyone in need of guidance with the knowledge gained on my journey so far.
      </p>
      <p>Challenges are always welcome. improvement is required.</p>
      <Button onClick={() => handleCV()}>
        Download CV
        <Icon
          icon="bx:bxs-cloud-download"
        />
      </Button>
      <Circle />
    </Container>
  );
};

export default AboutMe;
