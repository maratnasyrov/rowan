import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type SpinButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const SpinButton: React.FC<SpinButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="spin"
    type="boxLarge"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default SpinButton;
