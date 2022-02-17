import React from 'react';

import { Info, Watch } from '../../../../../components';
import { useTranslation } from '../../../../../hooks';
import { mainThemeSprinkles } from '../../../../../themes';

export type InfoPanelsProps = {
  nameGame: string;
  totalBet: string;
  balance: string;
};

const InfoPanels: React.FC<InfoPanelsProps> = ({
  nameGame,
  totalBet,
  balance,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Watch className={mainThemeSprinkles({ position: 'lt' })} />
      <Info
        className={mainThemeSprinkles({ position: 'rt' })}
        title={nameGame}
      />
      <Info
        className={mainThemeSprinkles({ position: 'lb' })}
        title={t('Total bet')}
        value={totalBet}
      />
      <Info
        className={mainThemeSprinkles({ position: 'rb' })}
        title={t('Balance')}
        value={balance}
      />
      {/* TODO: подумать где можно разместить демонстрацию выигрыша */}
    </>
  );
};

export default InfoPanels;
