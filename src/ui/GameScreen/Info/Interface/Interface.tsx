import React from 'react';

import {
  Container,
  Description,
  Divider,
  Info,
  Switch,
} from '../../../../components';
import { useTranslation } from '../../../../hooks';
import {
  AutoplayButton,
  BetButton,
  BuyFeatureButton,
  CloseButton,
  HistoryButton,
  HomeButton,
  InfoButton,
  MenuButton,
  SettingsButton,
  SpinButton,
  TurboSpinButton,
} from '../../buttons';

const Row: React.FC = ({ children }) => (
  <Container flexDirection="column" marginY="xs">
    {children}
    <Divider color="white300" />
  </Container>
);

const SubRow: React.FC = ({ children }) => (
  <Container flexDirection="column" marginLeft="md" marginTop="md">
    {children}
  </Container>
);

const Interface: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container flexDirection="column">
      <Row>
        <SpinButton />
        <Description>
          {t(
            'Click to start playing at the current bet line or press the Space bar key on your keyboard.'
          )}
          {t('Click the game area during a spin to stop the reels.')}
        </Description>
      </Row>
      <Row>
        <BetButton />
        <Description>{t('Click to select the total bet.')}</Description>
      </Row>
      <Row>
        <AutoplayButton />
        <Description>{t('Click to open the autoplay popup.')}</Description>
      </Row>
      <Row>
        <TurboSpinButton />
        <Description>
          {t('Click to enable/disable turbo spin mode.')}
        </Description>
      </Row>
      <Row>
        <MenuButton />
        <Description>
          {t(
            'Click to access the game settings, history, paytable and rules information.'
          )}
        </Description>
      </Row>
      <Row>
        <HomeButton />
        <Description>
          {t('Directs the player to the website’s home URL.')}
        </Description>
      </Row>
      <Row>
        <HistoryButton />
        <Description>{t('History')}</Description>
      </Row>
      <Row>
        <InfoButton />
        <Description>
          {t('Opens a tab with game paytables and rules.')}
        </Description>
      </Row>
      <Row>
        <SettingsButton />
        <Description>{t('Opens a tab with game settings.')}</Description>
        <SubRow>
          <Switch id="sound" label={t('Sound')} />
          <Description>{t('Toggle sound on/off')}</Description>
        </SubRow>
        <SubRow>
          <Switch id="sound_background" label={t('Background music')} />
          <Description>{t('Toggle background music on/off')}</Description>
        </SubRow>
      </Row>
      <Row>
        <CloseButton />
        <Description>{t('Go back to the game.')}</Description>
      </Row>
      <Row>
        <BuyFeatureButton />
        <Description>{t('Buy feature')}</Description>
      </Row>
      <Row>
        <Info title={t('Balance')} value="1000$" />
        <Description>
          {t('Displays your available bet balance in your currency.')}
        </Description>
      </Row>
      <Row>
        <Info title={t('Total bet')} value="10$" />
        <Description>
          {t('Displays your current total bet in your currency.')}
        </Description>
      </Row>
    </Container>
  );
};

export default Interface;
