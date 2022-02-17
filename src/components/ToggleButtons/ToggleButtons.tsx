import React from 'react';

import Button from '../Button';
import ToggleButtonGroup, {
  ToggleButton,
  ToggleButtonGroupProps,
} from '../ToggleButtonGroup';

export type ToggleButtonItem<TValue> = {
  value: TValue;
  label: string;
};

export type ToggleButtonsProps<TValue> = {
  items: Array<ToggleButtonItem<TValue>>;
} & ToggleButtonGroupProps<TValue>;

function ToggleButtons<TValue>({
  value,
  items,
  onChange,
}: React.PropsWithChildren<ToggleButtonsProps<TValue>>): React.ReactElement {
  return (
    <ToggleButtonGroup value={value} onChange={onChange}>
      {items.map(({ value: itemValue, label }) => (
        <ToggleButton key={label} Component={Button} value={itemValue}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ToggleButtons;
