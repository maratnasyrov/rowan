import React, { useCallback, useEffect, useState } from 'react';

import { GameScreenProps } from './GameScreen';
import PreloaderScreen from './PreloaderScreen';
import { StartScreenImage, StartScreenProps } from './StartScreen';
import UIi18nextProvider from './UIi18nextProvider';
import { delay, fakeGameData, fakeProgress, getImages } from './utils';

const PRELOADER_MIN_TIME = 1000;

export type UIProps = {
  previewImagesURL: Array<string>;
  Rules: React.FC;
  gameKey: string;
};

const UI: React.FC<UIProps> = ({ gameKey, previewImagesURL, Rules }) => {
  const [{ GameScreen, StartScreen }, setComponents] = useState<{
    StartScreen?: React.FC<StartScreenProps>;
    GameScreen?: React.FC<GameScreenProps>;
  }>({ StartScreen: undefined, GameScreen: undefined });
  const [preloaderProgress, setPreloaderProgress] = useState(0);
  const [preloaderAllFinished, setPreloaderAllFinished] = useState(false);
  const [startScreenProgress, setStartScreenProgress] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameData, setGameData] = useState<
    GameScreenProps['interfaceProps']['gameData'] | undefined
  >(undefined);
  const [images, setImages] = useState<Array<StartScreenImage>>([]);

  useEffect(() => {
    if (!StartScreen && preloaderProgress === 0) {
      setPreloaderProgress(90);

      Promise.all([
        import('./StartScreen'),
        getImages(previewImagesURL),
        delay(PRELOADER_MIN_TIME),
      ]).then(async ([{ default: Component }, imagesResult]) => {
        setImages(imagesResult);
        setComponents({ GameScreen, StartScreen: Component });
        setPreloaderProgress(100);
        await delay(500);
        setPreloaderAllFinished(true);
      });
    }
  }, [GameScreen, StartScreen, preloaderProgress, previewImagesURL]);

  useEffect(() => {
    if (StartScreen && !GameScreen && preloaderAllFinished) {
      const delayMs = 1000;

      Promise.all([
        import('./GameScreen'),
        fakeGameData(delayMs * 0.8), // TODO: убрать в будущем
        fakeProgress(delayMs, setStartScreenProgress), // TODO: убрать в будущем
      ]).then(([{ default: Component }, gameDataResult]) => {
        setGameData(gameDataResult);
        setComponents({ StartScreen, GameScreen: Component });
      });
    }
  }, [GameScreen, StartScreen, preloaderAllFinished]);

  const handleStart = useCallback(
    () => GameScreen && gameData && setIsGameStarted(true),
    [GameScreen, gameData]
  );

  let Screen = <PreloaderScreen progress={preloaderProgress} />;

  if (StartScreen && !isGameStarted && preloaderAllFinished) {
    Screen = (
      <StartScreen
        progress={startScreenProgress}
        images={images}
        onStart={handleStart}
      />
    );
  }

  if (GameScreen && isGameStarted && gameData) {
    Screen = <GameScreen interfaceProps={{ gameData, Rules }} />;
  }

  return <UIi18nextProvider namespace={gameKey}>{Screen}</UIi18nextProvider>;
};

export default UI;
