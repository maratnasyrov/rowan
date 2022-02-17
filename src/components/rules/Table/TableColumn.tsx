import React from 'react';

import { mainThemeSprinkles } from '../../../themes';

export type TableColumnProps = {
  variant?: 'th' | 'td';
};

const TableColumn: React.FC<TableColumnProps> = ({
  variant = 'td',
  children,
}) =>
  React.createElement(
    variant,
    {
      className: mainThemeSprinkles({
        padding: 'xs',
        border: 'normal',
        borderColor: 'white',
        textAlign: 'left',
      }),
    },
    children
  );

export default TableColumn;
