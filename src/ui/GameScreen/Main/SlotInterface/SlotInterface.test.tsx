import '@testing-library/jest-dom/extend-expect';
import './mocks/window.mock';

import { cleanup, render } from '@testing-library/react';
import React from 'react';

import SlotInterface from './SlotInterface';

afterEach(cleanup);

const Rules: React.FC = () => <></>;

describe('SlotInterface component', () => {
  const balance = '$1000';
  const currentBet = 2;
  const gameName = 'Custom game';
  const win = '$150';
  const betsRange = [1, 2, 3, 4, 5];

  test('should render all buttons', () => {
    const { getAllByRole } = render(
      <SlotInterface
        gameData={{ balance, currentBet, gameName, betsRange }}
        Rules={Rules}
      />
    );

    expect(getAllByRole('button')).toHaveLength(6);
  });

  test('should render with correct data', () => {
    const { getByText } = render(
      <SlotInterface
        gameData={{ balance, currentBet, gameName, win, betsRange }}
        Rules={Rules}
      />
    );

    expect(getByText(balance)).toBeInTheDocument();
    expect(getByText(currentBet.toFixed(2))).toBeInTheDocument();
    expect(getByText(gameName)).toBeInTheDocument();
    // expect(getByText(win)).toBeInTheDocument();
  });

  test('should render with correct data without "win"', () => {
    const { baseElement, getByText } = render(
      <SlotInterface
        gameData={{ balance, currentBet, gameName, betsRange }}
        Rules={Rules}
      />
    );

    expect(getByText(balance)).toBeInTheDocument();
    expect(getByText(currentBet.toFixed(2))).toBeInTheDocument();
    expect(getByText(gameName)).toBeInTheDocument();
    expect(baseElement).not.toHaveTextContent(win);
  });
});
