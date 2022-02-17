import React from 'react';

import Container from '../Container';

const ModalActions: React.FC = ({ children }) => (
  <Container
    flexDirection={{ portrait: 'row-reverse', landscape: 'column-reverse' }}
    justifyContent="flex-start"
    gap="xs"
    paddingLeft="safe"
    paddingRight={{ portrait: 'safe', landscape: 'md' }}
    paddingTop={{ portrait: 'md', landscape: 'safe' }}
    paddingBottom="safe"
    backgroundColor="black600"
  >
    {children}
  </Container>
);

export default ModalActions;
