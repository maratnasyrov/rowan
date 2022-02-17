import { Meta, Story } from '@storybook/react';
import React from 'react';

import Container from '../Container';
import Progress, { ProgressProps } from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<ProgressProps> = args => (
  <Container height="4" width="32" backgroundColor="white300">
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Progress {...args} />
  </Container>
);

export const InProgress = Template.bind({});
InProgress.args = {
  value: 90,
  animated: true,
};

export const Completed = Template.bind({});
Completed.args = {
  value: 100,
  animated: false,
};
