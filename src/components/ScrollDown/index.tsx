import React from 'react';
import { Icon } from '@iconify/react';

import { Container } from './styles';

const ScrollDown: React.FC = () => {
  return (
    <Container>
      <Icon icon="clarity:mouse-line" />
      Rolar para baixo
    </Container>
  );
}

export default ScrollDown;