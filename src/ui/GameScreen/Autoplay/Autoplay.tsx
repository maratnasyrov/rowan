import React from 'react';

import {
  Block,
  Button,
  Container,
  Content,
  Section,
  Switch,
  ToggleButtonItem,
  ToggleButtons,
} from '../../../components';
import { useTranslation } from '../../../hooks';

type FormattedNumbers = ToggleButtonItem<number>;

type AutoplayProps = {
  roundNumbers: Array<FormattedNumbers>;
  balanceLowerNumbers: Array<FormattedNumbers>;
  balanceHigherNumbers: Array<FormattedNumbers>;
  onChange: () => void;
};

const Autoplay: React.FC<AutoplayProps> = ({
  roundNumbers,
  balanceLowerNumbers,
  balanceHigherNumbers,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <Content>
      <Section title={t('Autoplay')}>
        <Block
          title={t('Stop before the balance is lower than')}
          titleAlign="left"
        >
          <Container columnGap="md" flexWrap="wrap">
            <ToggleButtons
              items={balanceLowerNumbers}
              value={balanceLowerNumbers[0].value}
              onChange={onChange}
            />
          </Container>
        </Block>

        <Block
          title={t('Stop before the balance is higher than')}
          titleAlign="left"
        >
          <Container columnGap="md" flexWrap="wrap">
            <ToggleButtons
              items={balanceHigherNumbers}
              value={balanceHigherNumbers[0].value}
              onChange={onChange}
            />
          </Container>
        </Block>

        <Block title={t('Number of rounds')} titleAlign="left">
          <Container columnGap="md" flexWrap="wrap">
            <ToggleButtons
              items={roundNumbers}
              value={roundNumbers[0].value}
              onChange={onChange}
            />
          </Container>
        </Block>

        <Block>
          <Container columnGap="md" flexWrap="wrap" justifyContent="flex-start">
            <Switch
              id="until_feature"
              label={t('Until feature')}
              onChange={onChange}
            />
          </Container>
        </Block>

        <Block>
          <Container columnGap="md" flexWrap="wrap" justifyContent="center">
            <Button onClick={onChange}>{t('Start')}</Button>
          </Container>
        </Block>
      </Section>
    </Content>
  );
};

export default Autoplay;
