import React from 'react';

import {
  Block,
  BlockProps,
  ImageInfo,
  ImageInfoProps,
} from '../../../../../components';

export type ImageInfoBlockProps = Pick<BlockProps, 'title'> &
  Pick<ImageInfoProps, 'src'>;

const ImageInfoBlock: React.FC<ImageInfoBlockProps> = ({
  title,
  src,
  children,
}) => (
  <Block title={title}>
    <ImageInfo src={src}>{children}</ImageInfo>
  </Block>
);

export default ImageInfoBlock;
