import { Meta, Story } from '@storybook/react';
import React from 'react';

import SlotInterface, { SlotInterfaceProps } from './SlotInterface';

export default {
  component: SlotInterface,
  title: 'ui/GameScreen/Main',
} as Meta;

const Rules: React.FC = () => <>Rules</>;

const Template: Story<SlotInterfaceProps> = ({ gameData }) => (
  <SlotInterface gameData={gameData} Rules={Rules} />
);

export const Interface = Template.bind({});

Interface.args = {
  gameData: {
    balance: '$1000',
    currentBet: 4,
    gameName: 'Custom game',
    win: '$150',
    betsRange: [1, 2, 3, 4, 5, 6, 7, 8],
  },
};
