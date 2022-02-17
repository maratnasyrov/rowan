import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type HomeButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const HomeButton: React.FC<HomeButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="home"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default HomeButton;
