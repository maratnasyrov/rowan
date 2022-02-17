import React from 'react';

import { IconButton, IconButtonProps } from '../../../components';

type TurboSpinButtonProps = Pick<
  IconButtonProps,
  'disabled' | 'className' | 'onClick'
>;

const TurboSpinButton: React.FC<TurboSpinButtonProps> = ({
  disabled,
  className,
  onClick,
}) => (
  <IconButton
    icon="turboSpin"
    disabled={disabled}
    className={className}
    onClick={onClick}
  />
);

export default TurboSpinButton;
