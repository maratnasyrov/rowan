import React from 'react';

type ToggleButtonGroupProviderProps<TValue> = {
  value: TValue;
  onChange: (newValue: TValue) => void;
};

export const ToggleButtonGroupContext = React.createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ToggleButtonGroupProviderProps<any>
>({
  value: null,
  onChange: () => undefined,
});

function ToggleButtonGroupProvider<TValue>({
  value,
  onChange,
  children,
}: React.PropsWithChildren<
  ToggleButtonGroupProviderProps<TValue>
>): React.ReactElement {
  return (
    <ToggleButtonGroupContext.Provider value={{ value, onChange }}>
      {children}
    </ToggleButtonGroupContext.Provider>
  );
}

export default ToggleButtonGroupProvider;
