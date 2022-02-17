import React from 'react';

import {
  Block,
  Container,
  Content,
  Section,
  ToggleButtonItem,
  ToggleButtons,
} from '../../../components';
import { useTranslation } from '../../../hooks';

export type BetsFormattedRange = ToggleButtonItem<number>;

export type BetsProps = {
  formattedRange: Array<BetsFormattedRange>;
  currentBet: number;
  changeBet: (value: number) => void;
  currency: string;
};

const Bets: React.FC<BetsProps> = ({
  formattedRange,
  currentBet,
  changeBet,
  currency,
}) => {
  const { t } = useTranslation();

  return (
    <Content>
      <Section title={`${t('Bet')} ${currency}`}>
        <Block>
          <Container
            flexWrap="wrap"
            justifyContent="center"
            alignContent="center"
            gap="sm"
          >
            <ToggleButtons
              value={currentBet}
              items={formattedRange}
              onChange={changeBet}
            />
          </Container>
        </Block>
      </Section>
    </Content>
  );
};

export default Bets;
