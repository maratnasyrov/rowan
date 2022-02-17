import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import LoadingButton, { LoadingButtonProps } from './LoadingButton';

export default {
  component: LoadingButton,
  title: 'Components/LoadingButton',
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    children: {
      description: 'Button content. May contain text.',
      defaultValue: 'Button',
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<LoadingButtonProps & { children: string }> = ({
  children,
  ...args
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <LoadingButton {...args} onClick={action('clicked')}>
    {children}
  </LoadingButton>
);

export const InProgress = Template.bind({});
InProgress.args = {
  progress: 45,
  children: 'Load',
};

export const Completed = Template.bind({});
Completed.args = {
  progress: 100,
  children: 'Start',
};
