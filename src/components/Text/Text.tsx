import React from 'react';

import { useStyles } from '../../hooks';
import { textRecipe, TextVariants } from './styles.css';

export type TextProps = {
  component?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
} & TextVariants;

const Text: React.FC<TextProps> = ({
  component = 'span',
  variant = 'body',
  color = 'white',
  align = 'left',
  className,
  children,
}) => {
  const classNameList = useStyles(
    textRecipe({ color, align, variant }),
    className
  );

  return React.createElement(component, { className: classNameList }, children);
};

export default Text;
