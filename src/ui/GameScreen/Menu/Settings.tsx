import React, { useCallback } from 'react';

import {
  Block,
  Container,
  Content,
  Section,
  Switch,
} from '../../../components';
import { useTranslation } from '../../../hooks';

const Settings: React.FC = () => {
  const { t } = useTranslation();

  const handleChange = useCallback(() => undefined, []);

  return (
    <Content>
      <Section title={t('Settings')}>
        <Block>
          <Container gap="lg" flexDirection="column">
            <Switch
              checked
              id="sound"
              label={t('Sound')}
              onChange={handleChange}
            />
            <Switch
              id="sound_background"
              label={t('Background music')}
              onChange={handleChange}
            />
          </Container>
        </Block>
      </Section>
    </Content>
  );
};

export default Settings;
