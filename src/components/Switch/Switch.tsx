import React, { ChangeEvent, useCallback } from 'react';

import { mainThemeSprinkles } from '../../themes';
import Container from '../Container';
import Text from '../Text';
import {
  switchMovingElementRecipe,
  switchRecipe,
  SwitchVariants,
} from './styles.css';

export type SwitchProps = {
  id: string;
  label?: string;
  onChange?: (value: boolean) => void;
} & SwitchVariants;

const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(event.target.checked),
    [onChange]
  );

  return (
    <Container gap="md" alignItems="center">
      <label htmlFor={id} className={switchRecipe({ disabled, checked })}>
        <input
          id={id}
          type="checkbox"
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          className={mainThemeSprinkles({
            opacity: 'hidden',
          })}
        />
        <span className={switchMovingElementRecipe({ disabled, checked })} />
      </label>
      {label && <Text color={disabled ? 'white300' : 'white'}>{label}</Text>}
    </Container>
  );
};

export default Switch;
