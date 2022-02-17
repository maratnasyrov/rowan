import React, { ReactEventHandler } from 'react';

import { useStyles } from '../../hooks';
import { buttonRecipe, ButtonVariants } from './styles.css';

export type ButtonProps = {
  disabled?: boolean;
  className?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
} & ButtonVariants;

const Button: React.FC<ButtonProps> = ({
  type = 'textSmall',
  color = 'white',
  disabled = false,
  className,
  children,
  onClick,
}) => {
  const classNameList = useStyles(buttonRecipe({ type, color }), className);

  return (
    <button
      type="button"
      disabled={disabled}
      className={classNameList}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
