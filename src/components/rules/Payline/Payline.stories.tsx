import { Meta, Story } from '@storybook/react';
import React from 'react';

import Payline, { PaylineProps } from './Payline';

export default {
  component: Payline,
  title: 'components/rules/Payline',
  parameters: {
    layout: 'padded',
  },
  args: {
    reels: 5,
    rows: 3,
    line: [0, 1, 2, 1, 0],
  },
  argTypes: {
    reels: {
      control: { type: 'range', min: 3, max: 10, step: 1 },
    },
    rows: {
      control: { type: 'range', min: 3, max: 10, step: 1 },
    },
    line: {
      control: { type: 'object' },
    },
  },
} as Meta;

const Template: Story<PaylineProps> = ({ reels, rows, line }) => {
  return <Payline reels={reels} rows={rows} line={line} />;
};

export const Default = Template.bind({});
Default.args = {};
