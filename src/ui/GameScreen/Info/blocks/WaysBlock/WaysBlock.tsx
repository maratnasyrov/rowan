import React from 'react';

import { Block } from '../../../../../components';
import { useTranslation } from '../../../../../hooks';
import Ways, { WaysProps } from '../../Ways';

type WaysBlockProps = { maxWays: number } & WaysProps;

const WaysBlock: React.FC<WaysBlockProps> = ({ maxWays, reels, rows }) => {
  const { t } = useTranslation();

  return (
    <Block title={`${t('Win ways')}: ${maxWays}`}>
      <Ways reels={reels} rows={rows} />
    </Block>
  );
};

export default WaysBlock;
