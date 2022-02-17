import React from 'react';

import { Block, Section } from '../../../../../components';
import { useTranslation } from '../../../../../hooks';
import Terminology from '../../Terminology';

const TerminologySection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('Terminology')}>
      <Block>
        <Terminology />
      </Block>
    </Section>
  );
};

export default TerminologySection;
