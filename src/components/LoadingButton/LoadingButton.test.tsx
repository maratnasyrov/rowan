import '@testing-library/jest-dom/extend-expect';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import LoadingButton from './LoadingButton';

afterEach(cleanup);

describe('LoadingButton component', () => {
  const handleClick = jest.fn();

  [10, 50, 90].forEach(progress => {
    test(`should be render with ${progress} progress value`, () => {
      render(<LoadingButton progress={progress} onClick={handleClick} />);

      const button = screen.getByRole('button');
      const span = button.querySelector('span');

      expect(button).toContainElement(span);
      expect(span).toHaveStyle({ width: `${progress}%` });
    });
  });

  test('should not be visible progress element', () => {
    render(<LoadingButton progress={100} onClick={handleClick} />);

    const button = screen.getByRole('button');
    const span = button.querySelector('span');

    expect(button).toContainElement(span);
    expect(span).toHaveStyle({ width: '0%' });
  });

  test('should be disabled', () => {
    render(<LoadingButton progress={50} onClick={handleClick} />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  test('should not be disabled', () => {
    render(<LoadingButton progress={100} onClick={handleClick} />);

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('must be clicked one times', () => {
    render(<LoadingButton progress={100} onClick={handleClick} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  test('must be clicked zero times', () => {
    render(<LoadingButton progress={33} onClick={handleClick} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(0);
  });
});
