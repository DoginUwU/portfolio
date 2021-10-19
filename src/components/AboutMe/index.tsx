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
      <Title>Sobre mim</Title>
      <p>
        Olá, sou o Luiz, um apaixonado desenvolvedor web front-end e freelancer
        brasileiro. Minha paixão por software é sonhar com ideias e torná-las
        realidade com interfaces elegantes. Tenho muito cuidado com a
        experiência, arquitetura e qualidade do código das coisas que construo.
      </p>
      <p>
        Agora tento sempre me dedicar o máximo possível em criar um produto de
        qualidade e fidelidade nas quais são me passado, além de ir aprendendo
        sempre coisas novas ao longo dessa jornada. Sou bem disposto em ajudar
        qualquer um que precise e estou sempre em busca de novos desafios para
        me aprimorar.
      </p>

      <Button onClick={() => handleCV()}>Baixar CV</Button>
      <Circle />
    </Container>
  );
};

export default AboutMe;
