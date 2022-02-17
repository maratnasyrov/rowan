import React from 'react';

import { Container, Payline, PaylineProps, Text } from '../../../../components';
import { useTranslation } from '../../../../hooks';

const winLines = [
  [1, 1, 0],
  [1, 2, 0, 0],
];

const noWinLines = [
  [1, 2],
  [1, 1, -1, 0],
];

export type WaysProps = Pick<PaylineProps, 'reels' | 'rows'>;

const Ways: React.FC<WaysProps> = ({ reels, rows }) => {
  const { t } = useTranslation();

  return (
    <Container flexDirection="column">
      <Container flexDirection="column">
        <Text variant="header3" align="center">
          {t('Win')}
        </Text>
        <Container justifyContent="center" gap="lg">
          {winLines.map(winLine => (
            <Payline
              key={winLine.join(',')}
              reels={reels}
              rows={rows}
              line={winLine}
            />
          ))}
        </Container>
        <Text variant="header3" align="center">
          {t('No win')}
        </Text>
        <Container justifyContent="center" gap="lg">
          {noWinLines.map(noWinLine => (
            <Payline
              key={noWinLine.join(',')}
              reels={reels}
              rows={rows}
              line={noWinLine}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Ways;
