import React from 'react';

import { SlotInterface, SlotInterfaceProps } from './Main';

export type GameScreenProps = {
  interfaceProps: SlotInterfaceProps;
};

const GameScreen: React.FC<GameScreenProps> = ({ interfaceProps }) => (
  <SlotInterface
    gameData={interfaceProps.gameData}
    Rules={interfaceProps.Rules}
  />
);

export default GameScreen;
