import React from 'react';

import { useTranslation } from '../../../../../hooks';
import ImageInfoBlock, { ImageInfoBlockProps } from '../ImageInfoBlock';

type ScatterSymbolBlockProps = Pick<ImageInfoBlockProps, 'src'>;

const ScatterSymbolBlock: React.FC<ScatterSymbolBlockProps> = ({
  src,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <ImageInfoBlock title={t('Scatter symbol')} src={src}>
      {children}
    </ImageInfoBlock>
  );
};

export default ScatterSymbolBlock;
