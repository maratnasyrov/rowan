import { Meta, Story } from '@storybook/react';
import React from 'react';

import Container from '../Container';
import Watch from './Watch';

export default {
  component: Watch,
  title: 'Components/Watch',
} as Meta;

const Template: Story = () => (
  <Container backgroundColor="green" padding="md">
    <Watch />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
