import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type HistoryButtonProps = Pick<
  IconButtonProps,
  'color' | 'disabled' | 'className' | 'onClick'
>;

const HistoryButton: React.FC<HistoryButtonProps> = ({
  color,
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="history"
    color={color}
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default HistoryButton;
