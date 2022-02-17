import React from 'react';

import Container from '../Container';
import Text, { TextProps } from '../Text';

export type BlockProps = {
  title?: string;
  titleAlign?: TextProps['align'];
};

const Block: React.FC<BlockProps> = ({
  title,
  titleAlign = 'center',
  children,
}) => (
  <Container flexDirection="column" marginY="md">
    {title && (
      <Text component="h2" variant="header2" align={titleAlign}>
        {title}
      </Text>
    )}
    {children}
  </Container>
);

export default Block;
