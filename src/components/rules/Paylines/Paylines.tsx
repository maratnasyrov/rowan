import React from 'react';

import { mainThemeSprinkles } from '../../../themes';
import Container from '../../Container';
import Text from '../../Text';
import Payline from '../Payline';

export type PaylinesProps = {
  reels: number;
  rows: number;
  lines: Array<Array<number>>;
};

const Paylines: React.FC<PaylinesProps> = ({ reels, rows, lines }) => (
  <Container justifyContent="center" gap="md" flexWrap="wrap">
    {lines.map((line, index) => (
      <Container key={line.join()} alignItems="center" gap="xs">
        <Text align="right" className={mainThemeSprinkles({ width: '4' })}>
          {index + 1}
        </Text>
        <Payline reels={reels} rows={rows} line={line} />
      </Container>
    ))}
  </Container>
);

export default Paylines;
