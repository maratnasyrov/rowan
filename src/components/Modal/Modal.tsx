import React from 'react';

import Container from '../Container';

const Modal: React.FC = ({ children }) => (
  <Container
    flexDirection={{ portrait: 'column', landscape: 'row-reverse' }}
    position="lrbt"
    zIndex="modal"
  >
    {children}
  </Container>
);

export default Modal;
