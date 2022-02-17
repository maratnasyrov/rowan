import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type SettingsButtonProps = Pick<
  IconButtonProps,
  'color' | 'disabled' | 'className' | 'onClick'
>;

const SettingsButton: React.FC<SettingsButtonProps> = ({
  color,
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="settings"
    color={color}
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default SettingsButton;
