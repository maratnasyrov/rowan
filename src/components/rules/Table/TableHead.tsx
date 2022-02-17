import React from 'react';

import { mainThemeSprinkles } from '../../../themes';

const TableHead: React.FC = ({ children }) => (
  <thead className={mainThemeSprinkles({ font: 'header4' })}>{children}</thead>
);

export default TableHead;
