import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '../Button';
import Container from '../Container';
import Divider from '../Divider';
import Text from '../Text';
import Message from './Message';
import MessageActions from './MessageActions';
import MessageContent from './MessageContent';

export default {
  title: 'components/Message',
  component: Message,
} as Meta;

const Template: Story = () => (
  <Container size="fullView" backgroundColor="white">
    <Message>
      <MessageContent>
        <Text variant="header2" align="center">
          Error
        </Text>
        <Text>Message description</Text>
      </MessageContent>
      <MessageActions>
        <Button type="transparent">Home</Button>
        <Divider type="vertical" />
        <Button type="transparent">Reload</Button>
      </MessageActions>
    </Message>
  </Container>
);

export const Default = Template.bind({});

Default.args = {};
