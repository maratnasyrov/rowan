import React from 'react';

import { useStyles } from '../../hooks';
import { flexSprinkles, FlexSprinklesProperties } from '../../themes';

export type ContainerProps = {
  className?: string;
} & FlexSprinklesProperties;

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const classNameList = useStyles(
    flexSprinkles({ display: 'flex', ...otherProps }),
    className
  );

  return <div className={classNameList}>{children}</div>;
};

export default Container;
