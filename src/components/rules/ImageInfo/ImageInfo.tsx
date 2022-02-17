import React from 'react';

import Container from '../../Container';
import Image from '../../Image';

export type ImageInfoProps = {
  src: string;
};

const ImageInfo: React.FC<ImageInfoProps> = ({ src, children }) => {
  return (
    <Container
      flexDirection={{ portrait: 'column', landscape: 'row' }}
      alignItems="center"
      gap={{ portrait: 'xs', landscape: 'md' }}
    >
      <Container width="32">
        <Image src={src} />
      </Container>
      <Container
        flexDirection="column"
        flex={{ landscape: '1' }}
        width={{ portrait: 'full' }}
      >
        {children}
      </Container>
    </Container>
  );
};

export default ImageInfo;
