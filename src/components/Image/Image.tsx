import React from 'react';

export type ImageProps = {
  src: string;
  alt?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  <img src={src} alt={alt} />
);

export default Image;
