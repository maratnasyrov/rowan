import React from 'react';

import Container from '../Container';
import Divider from '../Divider';
import Text from '../Text';

export type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <Container flexDirection="column" marginBottom="md">
    <Text component="h1" variant="header1">
      {title}
    </Text>
    <Divider />
    {children}
  </Container>
);

export default Section;
