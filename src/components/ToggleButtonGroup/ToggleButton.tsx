import React, { useCallback, useContext } from 'react';

import { ButtonProps } from '../Button';
import { ToggleButtonGroupContext } from './ToggleButtonGroupProvider';

type ToggleButtonProps<TValue> = {
  Component: React.FC<ButtonProps>;
  value: TValue;
} & Pick<ButtonProps, 'disabled' | 'className'>;

function ToggleButton<TValue>({
  Component,
  value: propValue,
  disabled,
  className,
  children,
}: React.PropsWithChildren<ToggleButtonProps<TValue>>): React.ReactElement {
  const { value, onChange } = useContext(ToggleButtonGroupContext);

  const handleClick = useCallback(
    () => onChange(propValue),
    [onChange, propValue]
  );

  return (
    <Component
      disabled={disabled}
      color={value === propValue ? 'yellow' : 'white'}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Component>
  );
}

export default ToggleButton;
