import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

export type UIi18nextProviderProps = {
  namespace: string;
};

const UIi18nextProvider: React.FC<UIi18nextProviderProps> = ({
  namespace,
  children,
}) => {
  useEffect(() => {
    i18n
      .use(Backend)
      .use(LanguageDetector)
      .init({
        fallbackLng: 'en',
        ns: ['rowan', namespace],
        defaultNS: namespace,
        interpolation: {
          escapeValue: false,
        },
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        detection: {
          order: ['querystring'],
          lookupQuerystring: 'lng',
        },
      });
  }, [namespace]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default UIi18nextProvider;
