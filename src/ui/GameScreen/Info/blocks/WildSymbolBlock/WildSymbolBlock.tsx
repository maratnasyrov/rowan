import React from 'react';

import { useTranslation } from '../../../../../hooks';
import ImageSymbolBlock, { ImageInfoBlockProps } from '../ImageInfoBlock';

type WildSymbolBlockProps = Pick<ImageInfoBlockProps, 'src'>;

const WildSymbolBlock: React.FC<WildSymbolBlockProps> = ({ src, children }) => {
  const { t } = useTranslation();

  return (
    <ImageSymbolBlock title={t('Wild symbol')} src={src}>
      {children}
    </ImageSymbolBlock>
  );
};

export default WildSymbolBlock;
