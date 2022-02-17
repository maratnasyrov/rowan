import { join, resolve } from 'path';

// eslint-disable-next-line import/prefer-default-export
export function path(directory: string, componentName: string): string {
  const basePath = resolve('src');

  return join(
    basePath,
    `${directory}/${componentName}/${componentName}.stories.playwright.json`
  );
}
