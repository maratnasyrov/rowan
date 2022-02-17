import React from 'react';

import { mainThemeSprinkles } from '../../../themes';

const TableBody: React.FC = ({ children }) => (
  <tbody className={mainThemeSprinkles({ font: 'body' })}>{children}</tbody>
);

export default TableBody;
