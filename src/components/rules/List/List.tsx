import React from 'react';

import { mainThemeSprinkles } from '../../../themes';
import ListProvider from './ListProvider';

export type ListProps = {
  component?: 'ul' | 'ol';
  paddingStart?: boolean;
  marginStart?: boolean;
  marked?: boolean;
};

const List: React.FC<ListProps> = ({
  component = 'ul',
  paddingStart = true,
  marginStart = true,
  marked = true,
  children,
}) => (
  <ListProvider marked={marked}>
    {React.createElement(
      component,
      {
        className: mainThemeSprinkles({
          marginLeft: marginStart ? 'xxs' : 'none',
          marginRight: 'none',
          marginY: 'none',
          paddingLeft: paddingStart ? 'md' : 'none',
        }),
      },
      children
    )}
  </ListProvider>
);

export default List;
