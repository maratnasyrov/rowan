import React from 'react';

import { dividerRecipe, DividerVariants } from './styles.css';

export type DividerProps = DividerVariants;

const Divider: React.FC<DividerProps> = ({
  type = 'horizontal',
  color = 'white600',
}) => <div className={dividerRecipe({ type, color })} />;

export default Divider;
