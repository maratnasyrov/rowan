import React, { useCallback, useMemo } from 'react';

import { Container } from '../../../../../components';
import { useWindowSettings } from '../../../../../hooks';
import {
  AutoplayButton,
  BetButton,
  BuyFeatureButton,
  MenuButton,
  SpinButton,
  TurboSpinButton,
} from '../../../buttons';
import { InterfaceStates } from '../types';

export type GameButtonsProps = {
  onClick: (state: InterfaceStates) => void;
};

const GameButtons: React.FC<GameButtonsProps> = ({ onClick }) => {
  const { orientation } = useWindowSettings();

  const buildHandler = useCallback(
    (newValue: InterfaceStates) => () => {
      onClick(newValue);
    },
    [onClick]
  );

  const Autoplay = useMemo(
    () => <AutoplayButton onClick={buildHandler('autoplay.settings')} />,
    [buildHandler]
  );

  const Bet = useMemo(
    () => <BetButton onClick={buildHandler('bet.settings')} />,
    [buildHandler]
  );

  const Menu = useMemo(
    () => <MenuButton onClick={buildHandler('menu.info')} />,
    [buildHandler]
  );

  const BuyFeature = useMemo(
    () => (
      <BuyFeatureButton
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => undefined}
      />
    ),
    []
  );

  const Spin = useMemo(
    () => (
      <SpinButton
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => undefined}
      />
    ),
    []
  );

  const TurboSpin = useMemo(
    () => (
      <TurboSpinButton
        // eslint-disable-next-line react/jsx-no-bind
        onClick={() => undefined}
      />
    ),
    []
  );

  if (orientation === 'portrait') {
    return (
      <Container
        justifyContent="space-between"
        alignItems="flex-end"
        paddingX="safe"
        paddingBottom="safe"
        position="lrb"
      >
        <Container flexDirection="column" gap="xs">
          {BuyFeature}
          <Container gap="xs">
            {Bet}
            {Autoplay}
          </Container>
        </Container>
        {Spin}
        <Container gap="xs">
          {TurboSpin}
          {Menu}
        </Container>
      </Container>
    );
  }

  return (
    <>
      <Container
        flexDirection="column"
        gap="xs"
        paddingLeft="safe"
        paddingBottom="safe"
        position="lb"
      >
        {BuyFeature}
        <Container gap="xs">
          {Menu}
          {Bet}
        </Container>
      </Container>
      <Container
        flexDirection="column"
        alignItems="center"
        gap="xs"
        paddingRight="safe"
        paddingBottom="safe"
        position="rb"
      >
        {Spin}
        <Container gap="xs">
          {Autoplay}
          {TurboSpin}
        </Container>
      </Container>
    </>
  );
};

export default GameButtons;
