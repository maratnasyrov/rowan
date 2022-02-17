import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import SlotAutoplay from './Autoplay';

export default {
  component: SlotAutoplay,
  title: 'ui/GameScreen/Autoplay',
} as Meta;

const Template: Story = () => {
  return (
    <SlotAutoplay
      roundNumbers={[
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
      balanceHigherNumbers={[
        { value: 100, label: '100%' },
        { value: 200, label: '200%' },
        { value: 500, label: '500%' },
      ]}
      balanceLowerNumbers={[
        { value: 25, label: '25%' },
        { value: 50, label: '50%' },
        { value: 75, label: '75%' },
      ]}
      onChange={action('changed')}
    />
  );
};

export const Autoplay = Template.bind({});
