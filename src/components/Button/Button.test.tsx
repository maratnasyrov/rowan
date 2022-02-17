import '@testing-library/jest-dom/extend-expect';

import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

afterEach(cleanup);

describe('Button component', () => {
  const handleClick = jest.fn();
  const ButtonComponent = <Button onClick={handleClick}>CLICK</Button>;
  const ButtonComponentDisabled = (
    <Button disabled onClick={handleClick}>
      CLICK
    </Button>
  );

  test('must be clicked one times', () => {
    const { getByText } = render(ButtonComponent);

    fireEvent.click(getByText(/CLICK/i));

    expect(handleClick).toBeCalledTimes(1);
  });

  test('must be clicked zero times', () => {
    const { getByText } = render(ButtonComponentDisabled);

    fireEvent.click(getByText(/CLICK/i));

    expect(handleClick).toBeCalledTimes(0);
  });

  test('should not be disable', () => {
    const { getByText } = render(ButtonComponent);

    expect(getByText(/CLICK/i)).not.toBeDisabled();
  });

  test('should be disable', () => {
    const { getByText } = render(ButtonComponentDisabled);

    expect(getByText(/CLICK/i)).toBeDisabled();
  });
});
