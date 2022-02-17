import React from 'react';

import { Block, Section } from '../../../../../components';
import { useTranslation } from '../../../../../hooks';
import Interface from '../../Interface';

const UserGuideSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('User interface guide')}>
      <Block>
        <Interface />
      </Block>
    </Section>
  );
};

export default UserGuideSection;
