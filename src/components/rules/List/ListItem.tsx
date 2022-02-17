import React, { useContext } from 'react';

import { useStyles } from '../../../hooks';
import { ListContext } from './ListProvider';
import { listItemRecipe } from './styles.css';

export type ListItemProps = { className?: string };

const ListItem: React.FC<ListItemProps> = ({ className, children }) => {
  const { marked } = useContext(ListContext);
  const classNameList = useStyles(listItemRecipe({ marked }), className);

  return <li className={classNameList}>{children}</li>;
};

export default ListItem;
