import React from 'react';

import { mainThemeSprinkles } from '../../themes';
import Container from '../Container';

const Message: React.FC = ({ children }) => (
  <Container
    position="lrbt"
    zIndex="message"
    justifyContent="center"
    alignItems="center"
    backgroundColor="black300"
    className={mainThemeSprinkles({
      backdropFilter: 'normal',
    })}
  >
    <Container
      flexDirection="column"
      width="64"
      height="50"
      backgroundColor="black600"
      className={mainThemeSprinkles({ borderRadius: 'lg' })}
    >
      {children}
    </Container>
  </Container>
);

export default Message;
