import React from 'react';

import { Block, Paylines, PaylinesProps } from '../../../../../components';
import { useTranslation } from '../../../../../hooks';

type PaylinesBlockProps = PaylinesProps;

const PaylinesBlock: React.FC<PaylinesBlockProps> = ({
  reels,
  rows,
  lines,
}) => {
  const { t } = useTranslation();

  return (
    <Block title={t('Winning paylines')}>
      <Paylines reels={reels} rows={rows} lines={lines} />
    </Block>
  );
};

export default PaylinesBlock;
