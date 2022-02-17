import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button, { ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
  args: {
    color: 'white',
    disabled: false,
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    color: {
      options: ['white', 'yellow'],
      control: { type: 'select' },
    },
    children: {
      description: 'Button content. May contain text.',
      defaultValue: 'Button',
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<ButtonProps & { children: string }> = ({
  children,
  ...args
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...args} onClick={action('clicked')}>
    {children}
  </Button>
);

export const White = Template.bind({});
White.args = {
  color: 'white',
};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow',
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'white',
  disabled: true,
};
