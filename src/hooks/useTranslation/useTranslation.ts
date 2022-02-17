import {
  useTranslation as useI18nTranslation,
  UseTranslationResponse,
} from 'react-i18next';

export default function useTranslation(): UseTranslationResponse<'rowan'> {
  return useI18nTranslation('rowan');
}
