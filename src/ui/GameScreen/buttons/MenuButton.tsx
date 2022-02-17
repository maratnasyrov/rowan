import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type MenuButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const MenuButton: React.FC<MenuButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="menu"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default MenuButton;
