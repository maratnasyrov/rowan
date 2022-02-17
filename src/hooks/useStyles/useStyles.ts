import { useMemo } from 'react';

export default function useStyles(
  className1: string,
  className2?: string,
  className3?: string
): string {
  return useMemo(
    () =>
      [className1, className2, className3]
        .filter(className => className !== undefined)
        .join(' '),
    [className1, className2, className3]
  );
}
