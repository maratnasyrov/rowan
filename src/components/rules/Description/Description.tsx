import React from 'react';

import { mainThemeSprinkles } from '../../../themes';
import Text from '../../Text';

const Description: React.FC = ({ children }) => (
  <Text
    component="p"
    align="justify"
    className={mainThemeSprinkles({
      marginY: 'xs',
    })}
  >
    {children}
  </Text>
);

export default Description;
