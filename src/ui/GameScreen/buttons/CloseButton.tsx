import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type CloseButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const CloseButton: React.FC<CloseButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="close"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default CloseButton;
