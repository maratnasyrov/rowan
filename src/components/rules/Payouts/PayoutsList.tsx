import React from 'react';

import { mainThemeSprinkles } from '../../../themes';
import Text from '../../Text';
import List, { ListItem } from '../List';

export type PayoutsListProps = {
  payouts: ReadonlyArray<string | null>;
};

const PayoutsList: React.FC<PayoutsListProps> = ({ payouts }) => {
  return (
    <List marked={false} paddingStart={false} marginStart={false}>
      {payouts
        .map(
          (payout, index) =>
            payout && (
              <ListItem
                key={payout}
                className={mainThemeSprinkles({
                  display: 'flex',
                  gap: 'xs',
                })}
              >
                <Text
                  color="yellow"
                  align="right"
                  className={mainThemeSprinkles({ width: '4' })}
                >
                  {`${index + 5} `}
                </Text>
                <Text>{payout}</Text>
              </ListItem>
            )
        )
        .reverse()}
    </List>
  );
};

export default PayoutsList;
