import BadgeItem from "../BadgeItem";
import Title from "../Title";
import { ITEMS } from "./SkillsHelper";

import { Container, ItemsContainer } from "./styles";

const Skills = () => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <ItemsContainer>
        {ITEMS.map((item, index) => (
          <BadgeItem
            key={index}
            name={item.name}
            image={item.image}
            duration={item.duration}
            hasProgressBar
          />
        ))}
      </ItemsContainer>
    </Container>
  );
};

export default Skills;
