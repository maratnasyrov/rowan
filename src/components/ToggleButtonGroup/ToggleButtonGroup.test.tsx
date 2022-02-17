import '@testing-library/jest-dom/extend-expect';

import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '../Button';
import ToggleButton from './ToggleButton';
import ToggleButtonGroup from './ToggleButtonGroup';

afterEach(cleanup);

describe('ToggleButtons component', () => {
  const handleChange = jest.fn<string, [string]>(value => value);

  const Component = (value: string) => (
    <ToggleButtonGroup value={value} onChange={handleChange}>
      <ToggleButton value="key1" Component={Button}>
        Button 1
      </ToggleButton>
      <ToggleButton value="key2" Component={Button}>
        Button 2
      </ToggleButton>
      <ToggleButton value="key3" Component={Button}>
        Button 3
      </ToggleButton>
    </ToggleButtonGroup>
  );

  test('must be clicked one times', () => {
    const { getByText } = render(Component('key1'));

    fireEvent.click(getByText(/Button 2/i));

    expect(handleChange).toBeCalledTimes(1);
  });

  test('must be rerendered with "key2" property', () => {
    const { getByText, rerender } = render(Component('key1'));

    fireEvent.click(getByText(/Button 2/i));

    const [{ value }] = handleChange.mock.results;

    rerender(Component(value));

    expect(getByText(/Button 2/i).className).toMatch(/yellow/gi);
    expect(value).toEqual('key2');
  });
});
