import BadgeItem from "../BadgeItem";
import Title from "../Title";
import { ITEMS } from "./ToolsHelper";

import { Container, ItemsContainer } from "./styles";

const Tools = () => {
  return (
    <Container>
      <Title>Tools/Aplications</Title>
      <ItemsContainer>
        {ITEMS.map((item, index) => (
          <BadgeItem
            key={index}
            name={item.name}
            image={item.image}
            hasProgressBar={false}
            duration={0}
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default Tools;
