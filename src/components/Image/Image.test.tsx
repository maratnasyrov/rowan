import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Image from './Image';

afterEach(cleanup);

describe('Image component', () => {
  const imgSrc = 'logo.png';

  test('should render with correct src', () => {
    const { getByAltText } = render(<Image alt="logo" src={imgSrc} />);

    const imageElement = getByAltText('logo');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imgSrc);
  });
});
