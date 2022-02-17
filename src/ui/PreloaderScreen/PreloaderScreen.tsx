import React from 'react';

import { Container, Progress } from '../../components';

export type PreloaderScreenProps = {
  progress: number;
};

const PreloaderScreen: React.FC<PreloaderScreenProps> = ({ progress }) => (
  <Container
    width="fullView"
    height="fullView"
    alignItems="center"
    padding="xxl"
    backgroundColor="black"
  >
    <Container height="4" width="full">
      <Progress value={progress} animated={progress < 100} />
    </Container>
  </Container>
);

export default PreloaderScreen;
