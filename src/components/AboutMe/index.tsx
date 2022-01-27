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
      <Title>Sobre mim</Title>
      <p>
        Olá, sou o Luiz, um apaixonado desenvolvedor web especializado em front
        end que além disso, trabalha como freelancer no Brasil. Minha paixão por
        software vem de sonhar com criativas ideias e transformá-las em
        realidade por meio de interfaces funcionais e elegantes.
      </p>
      <p>
        Procuro sempre me dedicar o máximo em criar produtos de qualidade com
        alta fidelidade segunda a proposta definida. Estou sempre disposto a
        aprender novas tecnologias assim como ajudar qualquer pessoa que precise
        de orientação com o conhecimento adquirido em minha jornada até agora.
      </p>
      <p>Desafios são sempre bem-vindos. Aprimoramento é lei.</p>
      <Button onClick={() => handleCV()}>
        Baixar CV
        <Icon
          icon="bx:bxs-cloud-download"
        />
      </Button>
      <Circle />
    </Container>
  );
};

export default AboutMe;
