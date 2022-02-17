import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Text from './Text';

afterEach(cleanup);

describe('Text component', () => {
  const text = 'Test text';

  test('should render span tag', () => {
    const { container } = render(<Text>{text}</Text>);

    const [span] = container.getElementsByTagName('span');

    expect(container).toContainElement(span);
    expect(span).toHaveTextContent(text);
  });

  test('should render div tag', () => {
    const { container } = render(<Text component="div">{text}</Text>);

    const [div] = container.getElementsByTagName('div');

    expect(container).toContainElement(div);
    expect(div).toHaveTextContent(text);
  });

  test('should contain correct text', () => {
    const { getByText } = render(<Text>{text}</Text>);

    expect(getByText(text)).toHaveTextContent(new RegExp(`^${text}$`, 'i'));
  });
});
