import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Switch, { SwitchProps } from './Switch';

export default {
  component: Switch,
  title: 'Components/Switch',
  parameters: {
    layout: 'padded',
  },
  args: {
    checked: false,
    disabled: false,
    label: 'Switch',
  },
} as Meta;

const Template: Story<SwitchProps> = args => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Switch {...args} onChange={action('change')} />;
};

export const Default = Template.bind({});
Default.args = {
  id: 'default',
};

export const Active = Template.bind({});
Active.args = {
  id: 'active',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled',
  disabled: true,
};
