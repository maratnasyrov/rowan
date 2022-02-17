import React from 'react';

import Container from '../Container';
import Divider from '../Divider';

const MessageActions: React.FC = ({ children }) => (
  <Container flexDirection="column">
    <Divider />
    <Container>{children}</Container>
  </Container>
);

export default MessageActions;
