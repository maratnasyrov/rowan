import { Meta, Story } from '@storybook/react';
import React, { useCallback } from 'react';

import Button, { ButtonProps } from '../Button';
import Container from '../Container';
import IconButton from '../IconButton';
import ToggleButton from './ToggleButton';
import ToggleButtonGroup, { ToggleButtonGroupProps } from './ToggleButtonGroup';

export default {
  component: ToggleButtonGroup,
  title: 'Components/ToggleButtonGroup',
  parameters: {
    layout: 'padded',
  },
} as Meta;

const TemplateRegular: Story<ToggleButtonGroupProps<string>> = () => {
  const [value, setValue] = React.useState('1');

  const handleValue = useCallback((newValue: string) => setValue(newValue), []);

  return (
    <Container gap="xs">
      <ToggleButtonGroup value={value} onChange={handleValue}>
        <ToggleButton Component={Button} value="1">
          100
        </ToggleButton>
        <ToggleButton Component={Button} value="2">
          200
        </ToggleButton>
        <ToggleButton Component={Button} value="3">
          300
        </ToggleButton>
      </ToggleButtonGroup>
    </Container>
  );
};

const InfoButton: React.FC<ButtonProps> = ({ color, onClick }) => (
  <IconButton color={color} icon="info" onClick={onClick} />
);
const SettingsButton: React.FC<ButtonProps> = ({ color, onClick }) => (
  <IconButton color={color} icon="settings" onClick={onClick} />
);
const HistoryButton: React.FC<ButtonProps> = ({ color, onClick }) => (
  <IconButton color={color} icon="history" onClick={onClick} />
);
const CloseButton: React.FC<ButtonProps> = ({ color, onClick }) => (
  <IconButton color={color} icon="close" onClick={onClick} />
);

const TemplateIcon: Story<ToggleButtonGroupProps<string>> = () => {
  const [value, setValue] = React.useState('1');

  const handleValue = useCallback((newValue: string) => setValue(newValue), []);

  return (
    <Container gap="xs">
      <ToggleButtonGroup value={value} onChange={handleValue}>
        <ToggleButton Component={InfoButton} value="1" />
        <ToggleButton Component={SettingsButton} value="2" />
        <ToggleButton Component={HistoryButton} value="3" />
        <ToggleButton Component={CloseButton} value="4" />
      </ToggleButtonGroup>
    </Container>
  );
};

export const RegularButtons = TemplateRegular.bind({});
RegularButtons.args = {};

export const IconButtons = TemplateIcon.bind({});
IconButtons.args = {};
