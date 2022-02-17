import React from 'react';

import ToggleButtonGroupProvider from './ToggleButtonGroupProvider';

export type ToggleButtonGroupProps<TValue> = {
  value: TValue;
  onChange: (newValue: TValue) => void;
};

function ToggleButtonGroup<TValue>({
  value,
  children,
  onChange,
}: React.PropsWithChildren<
  ToggleButtonGroupProps<TValue>
>): React.ReactElement {
  return (
    <ToggleButtonGroupProvider value={value} onChange={onChange}>
      {children}
    </ToggleButtonGroupProvider>
  );
}

export default ToggleButtonGroup;
