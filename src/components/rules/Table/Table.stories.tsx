import { Meta, Story } from '@storybook/react';
import React from 'react';

import Table from './Table';
import TableBody from './TableBody';
import TableColumn from './TableColumn';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default {
  title: 'components/rules/Table',
  component: Table,
  args: {
    titles: ['Game', 'Lines'],
    rows: [
      ['Book of Elixir', '10'],
      ['Witch Treasures', '50'],
    ],
  },
  argTypes: {
    titles: { control: { type: 'object' } },
    rows: { control: { type: 'object' } },
  },
} as Meta;

const Template: Story<{ titles: Array<string>; rows: Array<Array<string>> }> =
  ({ titles, rows }) => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            {titles.map(column => (
              <TableColumn key={column} variant="th">
                {column}
              </TableColumn>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(columns => (
            <TableRow key={columns.join(',')}>
              {columns.map(column => (
                <TableColumn key={column}>{column}</TableColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

export const Default = Template.bind({});
