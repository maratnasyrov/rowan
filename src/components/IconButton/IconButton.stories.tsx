import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  component: IconButton,
  title: 'Components/IconButton',
  args: {
    type: 'boxSmall',
    icon: 'info',
    color: 'white',
    disabled: false,
  },
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<IconButtonProps> = args => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <IconButton {...args} onClick={action('clicked')} />
);

export const White = Template.bind({});
White.args = {};

export const Yellow = Template.bind({});
Yellow.args = {
  color: 'yellow',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
