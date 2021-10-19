import { Icon } from "@iconify/react";
import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...others }: ButtonProps) => {
  return (
    <Container {...others}>
      {others.children}
      <Icon icon="ant-design:caret-right-filled" />
    </Container>
  );
};

export default Button;
