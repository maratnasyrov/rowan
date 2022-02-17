import React from 'react';

import { Container, Image, LoadingButton } from '../../components';
import { useTranslation } from '../../hooks';

export type StartScreenImage = { src: string; base64: string };

export type StartScreenProps = {
  progress: number;
  images: Array<StartScreenImage>;
  onStart: () => void;
};

const StartScreen: React.FC<StartScreenProps> = ({
  progress,
  images,
  onStart,
}) => {
  const { t } = useTranslation();

  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      width="fullView"
      height="fullView"
      alignItems="center"
      padding="safe"
    >
      <Container height="32" width="full">
        {images.map(({ src, base64 }) => (
          <Image key={src} src={base64} />
        ))}
      </Container>
      <LoadingButton
        progress={progress >= 100 ? 100 : progress}
        onClick={onStart}
      >
        {progress >= 100 ? t('Start') : t('Load')}
      </LoadingButton>
    </Container>
  );
};

export default StartScreen;
