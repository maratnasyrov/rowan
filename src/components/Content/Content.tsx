import React from 'react';

import Container from '../Container';

const Content: React.FC = ({ children }) => (
  <Container flexDirection="column">{children}</Container>
);

export default Content;
