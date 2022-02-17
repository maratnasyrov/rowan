import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import SlotBets from './Bets';

export default {
  component: SlotBets,
  title: 'ui/GameScreen/Bets',
} as Meta;

export const Bets: Story = () => {
  return (
    <SlotBets
      formattedRange={[
        { value: 1, label: '10.00' },
        { value: 2, label: '20.00' },
        { value: 3, label: '30.00' },
        { value: 4, label: '40.00' },
        { value: 5, label: '50.00' },
      ]}
      currentBet={2}
      changeBet={action('changed')}
      currency="USD"
    />
  );
};
