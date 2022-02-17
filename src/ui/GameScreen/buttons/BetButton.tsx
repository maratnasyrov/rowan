import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type BetButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const BetButton: React.FC<BetButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="bet"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default BetButton;
