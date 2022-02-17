import React from 'react';

import { mainThemeSprinkles } from '../../themes';
import Button, { ButtonProps } from '../Button';

export type LoadingButtonProps = Pick<ButtonProps, 'onClick'> & {
  progress: number;
};

const LoadingButton: React.FC<LoadingButtonProps> = ({
  progress = 0,
  children,
  onClick,
}) => (
  <Button
    type="textLarge"
    disabled={progress !== 100}
    className={mainThemeSprinkles({ position: 'relative' })}
    onClick={onClick}
  >
    <span
      className={mainThemeSprinkles({
        position: 'lt',
        height: 'full',
        backgroundColor: 'green',
      })}
      style={{ width: `${progress === 100 ? 0 : progress}%` }}
    />
    <span className={mainThemeSprinkles({ position: 'relative' })}>
      {children}
    </span>
  </Button>
);

export default LoadingButton;
