import React, { useCallback, useMemo, useState } from 'react';

import {
  Button,
  Divider,
  Message,
  MessageActions,
  MessageContent,
  Modal,
  ModalActions,
  ModalContent,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonItem,
} from '../../../../components';
import { mainThemeSprinkles } from '../../../../themes';
import Autoplay from '../../Autoplay';
import Bets from '../../Bets';
import {
  CloseButton,
  HistoryButton,
  HomeButton,
  InfoButton,
  SettingsButton,
} from '../../buttons';
import { History, Settings } from '../../Menu';
import GameButtons from './GameButtons';
import InfoPanels from './InfoPanels';
import { InterfaceStates } from './types';

export type SlotInterfaceProps = {
  gameData: {
    gameName: string;
    currentBet: number;
    balance: string;
    win?: string;
    betsRange: Array<number>;
  };
  Rules: React.FC;
};

const itemsFormatter = (
  items: Array<number>
): Array<ToggleButtonItem<number>> =>
  items.map(item => ({
    value: item,
    label: String(item),
  }));

const autoplayBalanceItems = (items: Array<number>) =>
  itemsFormatter(items).map(({ value, label }) => ({
    value,
    label: `${label}%`,
  }));

const SlotInterface: React.FC<SlotInterfaceProps> = ({
  gameData: { betsRange, ...other },
  Rules,
}) => {
  const [interfaceState, setInterfaceState] = useState<InterfaceStates>('idle');
  const [bet, setBet] = useState(other.currentBet);
  const isHistory = useMemo(
    () => interfaceState === 'menu.history',
    [interfaceState]
  );
  const isSettings = useMemo(
    () => interfaceState === 'menu.settings',
    [interfaceState]
  );
  const isInfo = useMemo(
    () => interfaceState === 'menu.info',
    [interfaceState]
  );
  const isBets = useMemo(
    () => interfaceState === 'bet.settings',
    [interfaceState]
  );
  const isAutoplay = useMemo(
    () => interfaceState === 'autoplay.settings',
    [interfaceState]
  );
  const isIdle = useMemo(() => interfaceState === 'idle', [interfaceState]);
  const isModalOpen = useMemo(
    () => isSettings || isInfo || isHistory || isBets || isAutoplay,
    [isAutoplay, isBets, isHistory, isInfo, isSettings]
  );
  const isMessage = useMemo(() => false, []);

  const buildStateHandler = useCallback(
    (state: InterfaceStates) => () => setInterfaceState(state),
    []
  );

  const handleToggleMenu = useCallback(
    (value: InterfaceStates) => setInterfaceState(value),
    []
  );

  const handleChangeBet = useCallback((value: number) => {
    setBet(value);
    setInterfaceState('idle');
  }, []);

  const handleChangeAutoplay = useCallback(() => undefined, []);

  return (
    <>
      {/* {isIdle && win && <WinPanel>{win}</WinPanel>} */}
      {isMessage && (
        <Message>
          {/* TODO: потом можно будет каждый вид сообщений сделать отдельно и все
          кнопки, текст и заголовки уже указать в этих компонента, а не здесь */}
          <MessageContent>
            <Text variant="header2" align="center">
              Error
            </Text>
            <Text>Message description</Text>
          </MessageContent>
          <MessageActions>
            <Button type="transparent">Home</Button>
            <Divider type="vertical" />
            <Button type="transparent">Reload</Button>
          </MessageActions>
        </Message>
      )}
      {isIdle && <GameButtons onClick={setInterfaceState} />}
      {isModalOpen && (
        <Modal>
          <ModalContent>
            {isBets && (
              <Bets
                formattedRange={itemsFormatter(betsRange)}
                currentBet={bet}
                changeBet={handleChangeBet}
                currency="FUN"
              />
            )}
            {isAutoplay && (
              <Autoplay
                roundNumbers={itemsFormatter([10, 20, 50, 100])}
                balanceHigherNumbers={autoplayBalanceItems([150, 200, 500])}
                balanceLowerNumbers={autoplayBalanceItems([25, 50, 75])}
                onChange={handleChangeAutoplay}
              />
            )}
            {isInfo && <Rules />}
            {isHistory && <History />}
            {isSettings && <Settings />}
          </ModalContent>
          <ModalActions>
            <CloseButton key="close" onClick={buildStateHandler('idle')} />
            {(isSettings || isInfo || isHistory) && [
              <ToggleButtonGroup
                key="menuButtons"
                value={interfaceState}
                onChange={handleToggleMenu}
              >
                <ToggleButton
                  Component={SettingsButton}
                  value="menu.settings"
                />
                <ToggleButton Component={InfoButton} value="menu.info" />
                <ToggleButton Component={HistoryButton} value="menu.history" />
              </ToggleButtonGroup>,
              <HomeButton
                key="home"
                className={mainThemeSprinkles({
                  position: { portrait: 'l-sm', landscape: 't-xl-safe' },
                })}
                onClick={buildStateHandler('idle')}
              />,
            ]}
          </ModalActions>
        </Modal>
      )}
      <InfoPanels
        nameGame={other.gameName}
        totalBet={other.currentBet.toFixed(2)}
        balance={other.balance}
      />
    </>
  );
};

export default SlotInterface;
