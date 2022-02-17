import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type AutoplayButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const AutoplayButton: React.FC<AutoplayButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="autoplay"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default AutoplayButton;
