import { Meta, Story } from '@storybook/react';
import React from 'react';

import MenuSettings from './Settings';

export default {
  component: MenuSettings,
  title: 'ui/GameScreen/menu/Settings',
} as Meta;

const Template: Story = () => <MenuSettings />;

export const Settings = Template.bind({});
