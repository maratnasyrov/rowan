import React from 'react';

import Container from '../../Container';
import Image from '../../Image';
import PayoutsList, { PayoutsListProps } from './PayoutsList';

export type PayoutsProps = {
  symbols: ReadonlyArray<{ src: string } & Pick<PayoutsListProps, 'payouts'>>;
};

const Payouts: React.FC<PayoutsProps> = ({ symbols }) => (
  <Container flexWrap="wrap" justifyContent="center">
    {symbols.map(symbol => (
      <Container
        key={symbol.src}
        flexDirection="column"
        alignItems="center"
        width="24"
        padding="xs"
      >
        <Image src={symbol.src} />
        <PayoutsList payouts={symbol.payouts} />
      </Container>
    ))}
  </Container>
);

export default Payouts;
