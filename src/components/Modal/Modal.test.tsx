import '@testing-library/jest-dom/extend-expect';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import Modal from './Modal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';

afterEach(cleanup);

describe('Modal component', () => {
  const contentText = 'Modal content';
  const actionText = 'Modal actions';

  const Content = <ModalContent>{contentText}</ModalContent>;
  const Footer = <ModalActions>{actionText}</ModalActions>;

  test('should render content and actions', () => {
    const { getByText } = render(
      <Modal>
        {Content}
        {Footer}
      </Modal>
    );

    expect(getByText(contentText)).toBeInTheDocument();
    expect(getByText(actionText)).toBeInTheDocument();
  });

  test('should render content', () => {
    const { baseElement, getByText } = render(<Modal>{Content}</Modal>);

    expect(getByText(contentText)).toBeInTheDocument();
    expect(baseElement).not.toContainHTML(`<div>${actionText}</div>`);
  });
});
