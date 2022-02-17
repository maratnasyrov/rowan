import { GameScreenProps } from './GameScreen';
import { StartScreenImage } from './StartScreen';

const ENV = process.env.NODE_ENV;

export function delay(ms: number): Promise<unknown> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// TODO: В будущем функция будет не нужна
export async function fakeProgress(
  ms: number,
  callback: (progress: number) => void
): Promise<void> {
  const steps = 100;

  for (let progress = 0; progress <= steps; progress += 1) {
    // eslint-disable-next-line no-await-in-loop
    await delay(ms / steps);

    callback(progress);
  }
}

async function loadImageInBase64(url: string): Promise<StartScreenImage> {
  const response = await fetch(url);
  const blob = await response.blob();

  // TODO: Убрать после разработки
  if (ENV === 'development') {
    await delay(1000);
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve({ src: url, base64: String(reader.result) });
    reader.readAsDataURL(blob);
  });
}

export async function getImages(
  imagesURL: Array<string>
): Promise<Array<StartScreenImage>> {
  return Promise.all(imagesURL.map(loadImageInBase64));
}

// TODO: В будущем функция будет не нужна
export async function fakeGameData(
  ms: number
): Promise<GameScreenProps['interfaceProps']['gameData']> {
  if (ENV === 'development') {
    await delay(ms);
  }

  return {
    balance: '$1000',
    currentBet: 1,
    gameName: 'Custom game',
    win: '$150',
    betsRange: [1, 2, 3, 4, 5, 6, 7, 8],
  };
}
