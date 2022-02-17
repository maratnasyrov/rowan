import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type InfoButtonProps = Pick<
  IconButtonProps,
  'color' | 'disabled' | 'className' | 'onClick'
>;

const InfoButton: React.FC<InfoButtonProps> = ({
  color,
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="info"
    color={color}
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default InfoButton;
