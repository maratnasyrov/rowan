import React from 'react';

import Container from '../Container';

const ModalContent: React.FC = ({ children }) => (
  <Container
    flexDirection="column"
    flex="1"
    paddingLeft={{ portrait: 'safe', landscape: 'md' }}
    paddingRight="safe"
    paddingTop="safe"
    paddingBottom={{ landscape: 'safe' }}
    backgroundColor="black300"
    overflow="vertical"
  >
    {children}
  </Container>
);

export default ModalContent;
