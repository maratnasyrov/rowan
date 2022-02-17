import React from 'react';

import Container from '../Container';

const MessageContent: React.FC = ({ children }) => (
  <Container
    padding="sm"
    flexDirection="column"
    flex="1"
    borderColor="white600"
    justifyContent="flex-start"
    overflow="vertical"
  >
    {children}
  </Container>
);

export default MessageContent;
