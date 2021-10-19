import { HTMLAttributes } from "react";
import { Container } from "./styles";

const Title = ({ ...others }: HTMLAttributes<HTMLHeadingElement>) => {
  return <Container {...others} />;
};

export default Title;
