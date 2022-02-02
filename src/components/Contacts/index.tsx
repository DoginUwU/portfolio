import { useEffect } from "react";
import Lottie from "lottie-web";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Title from "../Title";
import {
  BadgesContainer,
  ContactContainer,
  Container,
  InputsContainer,
} from "./styles";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import CopyToClipboard from "react-copy-to-clipboard";

interface ContactForm {
  user_name: string;
  reply_to: string;
  message: string;
}

const Contacts = () => {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  useEffect(() => {
    const element = document.querySelector("#computer_image");
    if (!element) return;

    Lottie.loadAnimation({
      container: element,
      animationData: require("../../assets/laptop.json"),
    });
  }, []);

  const sendEmail = (data: ContactForm) => {
    emailjs
      .send(
        "service_d3wl8ch",
        "template_n7jslwl",
        {
          user_name: data.user_name,
          reply_to: data.reply_to,
          message: data.message,
        },
        "user_pbH18gsT3YH3yt2bffOUA"
      )
      .then(
        () => {
          toast.success(
            "Seu email foi enviado com sucesso... Irei te chamar em breve!",
            {
              icon: "✅",
            }
          );
        },
        () => {
          toast.error("Não foi possível enviar seu email", {
            icon: "⛔",
          });
        }
      )
      .finally(() => reset());
  };

  const errorEmail = () => {
    toast.error("Campos faltando.", {
      icon: "⛔",
    });
  };

  const handleDiscord = () => {
    toast.success("Copiado para a área de transferência!", {
      icon: "🐶",
      duration: 5000,
    });
  };

  return (
    <Container id="contacts">
      <Title>Contatos</Title>
      <ContactContainer>
        <div id="computer_image" />
        <InputsContainer>
          <form onSubmit={handleSubmit(sendEmail, errorEmail)}>
            <input
              type="text"
              placeholder="Nome completo"
              {...register("user_name", { required: true })}
            />
            <input
              type="text"
              placeholder="Email"
              {...register("reply_to", { required: true })}
            />
            <input
              type="text"
              placeholder="Mensagem"
              {...register("message", { required: true })}
            />
            <Button type="submit">Enviar</Button>
          </form>
          <p className="or">Ou</p>
          <BadgesContainer>
            <a
              href="https://github.com/DoginUwU"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <Icon icon="akar-icons:github-fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/luiz-gotardo/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
            <a
              href="mailto:doginuwu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <Icon icon="ic:baseline-email" />
            </a>
            <CopyToClipboard text="Dogs ♡#0172" onCopy={handleDiscord}>
              <div>
                <Icon icon="bx:bxl-discord-alt" />
              </div>
            </CopyToClipboard>
          </BadgesContainer>
        </InputsContainer>
      </ContactContainer>
    </Container>
  );
};

export default Contacts;
