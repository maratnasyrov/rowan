import React from 'react';

import {
  Description,
  Table,
  TableBody,
  TableColumn,
  TableHead,
  TableRow,
} from '../../../../components';
import { useTranslation } from '../../../../hooks';

const Row: React.FC<{ term: string }> = ({ term, children }) => (
  <TableRow>
    <TableColumn>{term}</TableColumn>
    <TableColumn>{children}</TableColumn>
  </TableRow>
);

const Terminology: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Description>
        {t(
          'The following table applies if playing in a language other than English.'
        )}
      </Description>
      <Table>
        <TableHead>
          <TableRow>
            <TableColumn variant="th">{t('English term')}</TableColumn>
            <TableColumn variant="th">{t('Translated term')}</TableColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          <Row term="Free Spins">{t('Free Spins')}</Row>
          <Row term="Free Spins Awarded">{t('Free Spins Awarded')}</Row>
          <Row term="Free Spins Left">{t('Free Spins Left')}</Row>
          <Row term="Respin">{t('Respin')}</Row>
          <Row term="Respin Left">{t('Respin Left')}</Row>
          <Row term="Respin completed">{t('Respin completed')}</Row>
          <Row term="Scatter">{t('Scatter')}</Row>
          <Row term="Wild">{t('Wild')}</Row>
          <Row term="Special Expanding symbol">
            {t('Special Expanding symbol')}
          </Row>
          <Row term="Total Win">{t('Total Win')}</Row>
          <Row term="Big Win">{t('Big Win')}</Row>
          <Row term="Super Win">{t('Super Win')}</Row>
          <Row term="Mega Win">{t('Mega Win')}</Row>
          <Row term="Epic Win">{t('Epic Win')}</Row>
          <Row term="Congratulations">{t('Congratulations')}</Row>
          <Row term="Jackpot">{t('Jackpot')}</Row>
          <Row term="Mega">{t('Mega')}</Row>
          <Row term="Major">{t('Major')}</Row>
          <Row term="Minor">{t('Minor')}</Row>
          <Row term="Mini">{t('Mini')}</Row>
        </TableBody>
      </Table>
    </>
  );
};

export default Terminology;
