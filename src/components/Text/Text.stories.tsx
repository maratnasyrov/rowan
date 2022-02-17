import { Meta, Story } from '@storybook/react';
import React from 'react';

import Text, { TextProps } from './Text';

export default {
  component: Text,
  title: 'Components/Text',
  args: {
    color: 'white',
    align: 'left',
  },
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      defaultValue: 'Some text',
      control: { type: 'text' },
    },
    color: {
      options: ['white', 'yellow', 'white300'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<TextProps & { children: string }> = ({
  children,
  ...args
  // eslint-disable-next-line react/jsx-props-no-spreading
}) => <Text {...args}>{children}</Text>;

export const Default = Template.bind({});
Default.args = {
  component: 'span',
  color: 'white',
  variant: 'body',
};

export const Header1 = Template.bind({});
Header1.args = {
  component: 'h1',
  color: 'yellow',
  variant: 'header1',
  align: 'center',
  children: 'Some title',
};
