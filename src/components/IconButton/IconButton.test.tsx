import '@testing-library/jest-dom/extend-expect';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { icons } from '../Icon';
import IconButton, { IconButtonProps } from './IconButton';

afterEach(cleanup);

describe('IconButton component', () => {
  const handleClick = jest.fn();

  Object.entries(icons).forEach(([iconKey, props]) => {
    test(`should render correct ${iconKey} svg`, () => {
      render(
        <IconButton
          icon={iconKey as IconButtonProps['icon']}
          onClick={handleClick}
        />
      );

      const button = screen.getByRole('button');
      const svg = button.querySelector('svg');
      const paths = svg?.querySelectorAll('path');

      expect(button).toContainElement(svg);

      paths?.forEach((path, index) => {
        expect(path).toHaveAttribute('d', props.paths[index]);
      });
    });
  });

  const icon = 'autoplay';

  test('should be clicked one times', () => {
    render(<IconButton icon={icon} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toBeCalledTimes(1);
  });

  describe('is disable', () => {
    const DisabledComponent = (
      <IconButton disabled icon={icon} onClick={handleClick} />
    );

    test('should be unavailable', () => {
      render(DisabledComponent);

      expect(screen.getByRole('button')).toBeDisabled();
    });

    test('should be clicked zero times', () => {
      render(DisabledComponent);

      fireEvent.click(screen.getByRole('button'));

      expect(handleClick).toBeCalledTimes(0);
    });
  });
});
