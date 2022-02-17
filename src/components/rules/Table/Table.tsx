import React from 'react';

import { mainThemeSprinkles } from '../../../themes';

const Table: React.FC = ({ children }) => (
  <table
    className={mainThemeSprinkles({
      borderCollapse: 'collapse',
      color: 'white',
      width: 'full',
    })}
  >
    {children}
  </table>
);

export default Table;
