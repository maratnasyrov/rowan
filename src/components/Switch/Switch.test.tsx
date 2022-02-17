import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Switch from './Switch';

afterEach(cleanup);

describe('Switch component', () => {
  const handleChange = jest.fn();

  test('should be checked', () => {
    const { getByRole } = render(
      <Switch checked id="switch" onChange={handleChange} />
    );

    expect(getByRole('checkbox')).toBeChecked();
  });

  test('should not be checked', () => {
    const { getByRole } = render(
      <Switch id="switch" onChange={handleChange} />
    );

    expect(getByRole('checkbox')).not.toBeChecked();
  });

  test('must have a label', () => {
    const text = 'Test switch';

    const { getByText } = render(
      <Switch checked id="switch" label={text} onChange={handleChange} />
    );

    expect(getByText(text)).toBeInTheDocument();
  });

  describe('is not disabled', () => {
    test('should be changed', () => {
      const { getByRole } = render(
        <Switch checked id="switch" onChange={handleChange} />
      );

      userEvent.click(getByRole('checkbox'));

      expect(handleChange).toBeCalled();
    });
  });

  describe('is disabled', () => {
    test('should not be changed', () => {
      const { getByRole } = render(
        <Switch checked disabled id="switch" onChange={handleChange} />
      );

      userEvent.click(getByRole('checkbox'));

      expect(handleChange).not.toBeCalled();
    });
  });
});
