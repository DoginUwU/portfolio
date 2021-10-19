import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...others }: ButtonProps) => {
  return <Container {...others} />;
};

export default Button;
