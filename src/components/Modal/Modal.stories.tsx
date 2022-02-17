import { Meta, Story } from '@storybook/react';
import React from 'react';

import { IconButton } from '..';
import Block from '../Block';
import Content from '../Content';
import Section from '../Section';
import Text from '../Text';
import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';

export default {
  title: 'components/Modal',
} as Meta;

const Template: Story = () => {
  return (
    <Modal>
      <ModalContent>
        <Content>
          <Section title="Section title">
            <Block title="Block title" titleAlign="left">
              <Text>Text</Text>
            </Block>
          </Section>
        </Content>
      </ModalContent>
      <ModalActions>
        <IconButton icon="close" />
      </ModalActions>
    </Modal>
  );
};

export const Default = Template.bind({});
