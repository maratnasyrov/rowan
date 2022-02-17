import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Progress from './Progress';

afterEach(cleanup);

describe('Progress component', () => {
  const values = [10, 75];

  values.forEach(value => {
    describe(`value is ${value}`, () => {
      test(`should be with value ${value}`, () => {
        const { getByRole } = render(<Progress value={value} />);

        const progress = getByRole('progressbar');

        expect(progress).toHaveAttribute('aria-valuenow', String(value));
        expect(progress).toHaveStyle(`width: ${value}%`);
      });
    });
  });

  describe('value is 110', () => {
    test('should be with value 100', () => {
      const { getByRole } = render(<Progress value={110} />);

      const progress = getByRole('progressbar');

      expect(progress).toHaveAttribute('aria-valuenow', '100');
      expect(progress).toHaveStyle(`width: 100%`);
    });
  });
});
