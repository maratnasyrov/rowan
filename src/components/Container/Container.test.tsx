import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Container from './Container';

afterEach(cleanup);

describe('Container component', () => {
  const text = 'Test container';

  test('should be displayed content', () => {
    const { getByText } = render(<Container>{text}</Container>);

    expect(getByText(text)).toBeInTheDocument();
  });

  test('must have a className', () => {
    const className = 'testClassName';

    const { getByText } = render(
      <Container className={className}>{text}</Container>
    );

    expect(getByText(text)).toHaveClass(className);
  });
});
