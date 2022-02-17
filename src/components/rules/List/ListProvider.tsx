import React, { createContext } from 'react';

export type ListProviderProps = {
  marked?: boolean;
};

export const ListContext = createContext<ListProviderProps>({
  marked: false,
});

const ListProvider: React.FC<ListProviderProps> = ({ marked, children }) => (
  <ListContext.Provider value={{ marked }}>{children}</ListContext.Provider>
);

export default ListProvider;
