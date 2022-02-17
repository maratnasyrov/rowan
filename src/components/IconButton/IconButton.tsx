import React from 'react';

import { useStyles } from '../../hooks';
import { mainThemeSprinkles } from '../../themes';
import Button, { ButtonProps } from '../Button';
import Icon, { IconProps } from '../Icon';

export type IconButtonProps = IconProps & ButtonProps;

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  disabled,
  color = 'white',
  type = 'boxSmall',
  className,
  onClick,
}) => {
  const classNameList = useStyles(
    mainThemeSprinkles({
      backdropFilter: 'normal',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 'xxs',
    }),
    className
  );

  return (
    <Button
      type={type}
      color={color}
      disabled={disabled}
      className={classNameList}
      onClick={onClick}
    >
      <Icon icon={icon} color={disabled ? 'gray' : color} />
    </Button>
  );
};

export default IconButton;
